// app/page.tsx
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()

  const { data: negocios, error } = await supabase
    .from('negocio')
    .select('ecodnegocio, tnombre, tdescripcion, tciudad, bstateverificado')
    .eq('bstateactivo', true)
    .order('fhcreate', { ascending: false })

  if (error) {
    console.error('Error cargando negocios:', error)
    return <div className="p-8 text-red-600">Error al cargar negocios.</div>
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Negocios cerca de ti</h1>

      {negocios.length === 0 ? (
        <p className="text-gray-500">No hay negocios disponibles todavía.</p>
      ) : (
        <div className="grid gap-4">
          {negocios.map((negocio) => (
            <div
              key={negocio.ecodnegocio}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{negocio.tnombre}</h2>
                {negocio.bstateverificado && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    Verificado
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{negocio.tciudad}</p>
              {negocio.tdescripcion && (
                <p className="text-sm mt-2">{negocio.tdescripcion}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}