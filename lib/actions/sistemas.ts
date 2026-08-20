'use server'

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'

type SistemasState = { error: string | null; success?: boolean }

async function verificarRolSistemas() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: perfil } = await supabase
    .from('perfil')
    .select('erol')
    .eq('ecodusuario', user.id)
    .single()

  if (perfil?.erol !== 'sistemas') redirect('/')
}

export async function crearNegocioAction(
  _prevState: SistemasState,
  formData: FormData
): Promise<SistemasState> {
  await verificarRolSistemas()

  const nombreNegocio = formData.get('nombreNegocio') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const ciudad = formData.get('ciudad') as string
  const telefono = formData.get('telefono') as string

  const admin = createAdminClient()

  const { data: userData, error: userError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (userError || !userData.user) {
    return { error: userError?.message || 'No se pudo crear el usuario' }
  }

  const { error: rolError } = await admin
    .from('perfil')
    .update({ erol: 'negocio' })
    .eq('ecodusuario', userData.user.id)

  if (rolError) {
    return { error: 'Usuario creado, pero no se pudo asignar el rol de negocio: ' + rolError.message }
  }

  const { error: negocioError } = await admin.from('negocio').insert({
    tnombre: nombreNegocio,
    ecodusuariodueno: userData.user.id,
    tciudad: ciudad,
    ttelefono: telefono,
    temail: email,
    bstateactivo: true,
    bstateverificado: true,
  })

  if (negocioError) {
    return { error: 'Usuario creado, pero no se pudo crear el negocio: ' + negocioError.message }
  }

  return { error: null, success: true }
}