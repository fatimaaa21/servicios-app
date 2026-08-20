import { getNegociosParaSistemas } from '@/lib/queries/sistemas'

export async function PanelResumen() {
  const { data: negocios } = await getNegociosParaSistemas()

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink mb-6">Panel de sistemas</h1>
      <div className="bg-surface border border-line rounded-card p-5 inline-block">
        <div className="text-sm text-neutral">Negocios registrados</div>
        <div className="text-3xl font-bold text-ink mt-1">{negocios?.length ?? 0}</div>
      </div>
    </div>
  )
}