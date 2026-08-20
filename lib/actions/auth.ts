'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

type AuthState = { error: string | null }

export async function loginAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: 'Correo o contraseña incorrectos' }
  }

  const { data: perfil } = await supabase
    .from('perfil')
    .select('erol')
    .eq('ecodusuario', data.user.id)
    .single()

  if (perfil?.erol === 'sistemas') redirect('/sistemas')
  if (perfil?.erol === 'negocio') redirect('/negocio/panel')
  redirect('/')
}

export async function registroAction(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { nombre } },
  })

  if (error) {
    return { error: error.message }
  }

  if (data.user) {
    const { error: perfilError } = await supabase
      .from('usuario')
      .insert({ ecodusuario: data.user.id, tnombre: nombre, temail: email })

    if (perfilError) {
        console.error('Error insertando en usuario:', perfilError)
        return { error: 'Cuenta creada, pero hubo un problema guardando tu perfil: ' + perfilError.message }
    }
  }

  redirect('/')
}