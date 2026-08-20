import { createClient } from '@/lib/supabase/server'

export interface NegocioResumen {
  ecodnegocio: string
  tnombre: string
  tdescripcion: string | null
  tciudad: string | null
  bstateverificado: boolean | null
}

export async function getNegociosActivos(): Promise<{
  data: NegocioResumen[] | null
  error: string | null
}> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('negocio')
    .select('ecodnegocio, tnombre, tdescripcion, tciudad, bstateverificado')
    .eq('bstateactivo', true)
    .order('fhcreate', { ascending: false })

  if (error) {
    console.error('Error cargando negocios:', error)
    return { data: null, error: 'No se pudieron cargar los negocios.' }
  }

  return { data, error: null }
}