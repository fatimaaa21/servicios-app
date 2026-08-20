import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SistemasSidebar } from '@/components/sistemas/SistemasSidebar'

export default async function SistemasLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: perfil } = await supabase
    .from('perfil')
    .select('erol')
    .eq('ecodusuario', user.id)
    .single()

  if (perfil?.erol !== 'sistemas') redirect('/')

  return (
    <div className="flex min-h-screen bg-base">
      <SistemasSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}