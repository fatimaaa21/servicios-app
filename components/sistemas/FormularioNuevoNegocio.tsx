'use client'

import { useActionState } from 'react'
import { crearNegocioAction } from '@/lib/actions/sistemas'

const initialState = { error: null }

export function FormularioNuevoNegocio() {
  const [state, formAction, pending] = useActionState(crearNegocioAction, initialState)

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold text-ink mb-6">Dar de alta negocio</h1>
      <form action={formAction} className="space-y-4">
        <input name="nombreNegocio" placeholder="Nombre del negocio" required className="w-full border border-line rounded-card px-3 py-2" />
        <input name="ciudad" placeholder="Ciudad" required className="w-full border border-line rounded-card px-3 py-2" />
        <input name="telefono" placeholder="Teléfono" className="w-full border border-line rounded-card px-3 py-2" />
        <input name="email" type="email" placeholder="Correo del negocio" required className="w-full border border-line rounded-card px-3 py-2" />
        <input name="password" type="text" placeholder="Contraseña temporal" required minLength={6} className="w-full border border-line rounded-card px-3 py-2" />
        {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
        {state?.success && <p className="text-support text-sm">Negocio creado correctamente.</p>}
        <button type="submit" disabled={pending} className="w-full bg-primary text-white rounded-card py-2 font-semibold disabled:opacity-60">
          {pending ? 'Creando...' : 'Crear negocio'}
        </button>
      </form>
    </div>
  )
}