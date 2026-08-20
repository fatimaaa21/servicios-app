'use client'

import { useActionState } from 'react'
import { registroAction } from '@/lib/actions/auth'

const initialState = { error: null }

export default function RegistroPage() {
  const [state, formAction, pending] = useActionState(registroAction, initialState)

  return (
    <main className="max-w-sm mx-auto p-8">
      <h1 className="text-xl font-bold mb-6 text-ink">Crea tu cuenta</h1>
      <form action={formAction} className="space-y-4">
        <input
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full border border-line rounded-card px-3 py-2"
        />
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
          minLength={6}
          className="w-full border border-line rounded-card px-3 py-2"
        />
        {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-primary text-white rounded-card py-2 font-semibold disabled:opacity-60"
        >
          {pending ? 'Creando cuenta...' : 'Crear cuenta'}
        </button>
      </form>
    </main>
  )
}