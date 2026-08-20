import Link from 'next/link'

export function SistemasSidebar() {
  return (
    <aside className="w-60 bg-surface border-r border-line flex flex-col">
      <div className="p-5 border-b border-line">
        <span className="font-bold text-ink text-lg">Sistemas</span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        <Link href="/sistemas" className="block px-3 py-2 rounded-card text-sm font-medium text-ink hover:bg-base">
          Panel
        </Link>
        <Link href="/sistemas/negocios" className="block px-3 py-2 rounded-card text-sm font-medium text-ink hover:bg-base">
          Negocios
        </Link>
      </nav>
    </aside>
  )
}