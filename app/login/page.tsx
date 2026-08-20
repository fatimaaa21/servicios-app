'use client'

import { useActionState } from 'react'
import { loginAction } from '@/lib/actions/auth'

const initialState = { error: null }

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState)

  return (
    <main className="max-w-sm mx-auto p-8">
      <h1 className="text-xl font-bold mb-6 text-ink">Iniciar sesión</h1>
      <form action={formAction} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="tu@correo.com"
          required
          className="w-full border border-line rounded-card px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          className="w-full border border-line rounded-card px-3 py-2"
        />
        {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-primary text-white rounded-card py-2 font-semibold disabled:opacity-60"
        >
          {pending ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}