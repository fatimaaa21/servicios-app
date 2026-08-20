import { createClient } from '@/lib/supabase/server'

export interface NegocioSistemas {
  ecodnegocio: string
  tnombre: string
  tciudad: string | null
  temail: string | null
  bstateactivo: boolean | null
  bstateverificado: boolean | null
}

export async function getNegociosParaSistemas(): Promise<{
  data: NegocioSistemas[] | null
  error: string | null
}> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('negocio')
    .select('ecodnegocio, tnombre, tciudad, temail, bstateactivo, bstateverificado')
    .order('fhcreate', { ascending: false })

  if (error) {
    return { data: null, error: 'No se pudieron cargar los negocios.' }
  }

  return { data, error: null }
}