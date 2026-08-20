import Link from 'next/link'
import { getNegociosParaSistemas } from '@/lib/queries/sistemas'

export async function TablaNegocios() {
  const { data: negocios, error } = await getNegociosParaSistemas()

  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-ink">Negocios</h1>
        <Link href="/sistemas/negocios/nuevo" className="bg-primary text-white rounded-card px-4 py-2 text-sm font-semibold">
          + Nuevo negocio
        </Link>
      </div>

      <div className="bg-surface border border-line rounded-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-base text-neutral text-left">
            <tr>
              <th className="p-3 font-medium">Nombre</th>
              <th className="p-3 font-medium">Ciudad</th>
              <th className="p-3 font-medium">Correo</th>
              <th className="p-3 font-medium">Activo</th>
            </tr>
          </thead>
          <tbody>
            {negocios?.map((n) => (
              <tr key={n.ecodnegocio} className="border-t border-line">
                <td className="p-3 text-ink font-medium">{n.tnombre}</td>
                <td className="p-3 text-neutral">{n.tciudad}</td>
                <td className="p-3 text-neutral">{n.temail}</td>
                <td className="p-3">
                  <span className={n.bstateactivo ? 'text-support' : 'text-neutral'}>
                    {n.bstateactivo ? 'Sí' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}