import { getNegociosActivos } from '@/lib/queries/negocio'

export default async function HomePage() {
  const { data: negocios, error } = await getNegociosActivos()

  if (error) {
    return <div className="p-8 text-red-600">{error}</div>
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-ink">Negocios cerca de ti</h1>

      {negocios?.length === 0 ? (
        <p className="text-neutral">No hay negocios disponibles todavía.</p>
      ) : (
        <div className="grid gap-4">
          {negocios?.map((negocio) => (
            <div
              key={negocio.ecodnegocio}
              className="bg-surface border border-line rounded-card p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-ink">{negocio.tnombre}</h2>
                {negocio.bstateverificado && (
                  <span className="text-xs bg-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                    Verificado
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral">{negocio.tciudad}</p>
              {negocio.tdescripcion && (
                <p className="text-sm mt-2 text-ink">{negocio.tdescripcion}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}