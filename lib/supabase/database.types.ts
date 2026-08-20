export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      categoria: {
        Row: {
          bstateactivo: boolean | null
          ecodcategoria: string
          fhcreate: string | null
          fhupdate: string | null
          ticono: string | null
          tnombre: string
        }
        Insert: {
          bstateactivo?: boolean | null
          ecodcategoria?: string
          fhcreate?: string | null
          fhupdate?: string | null
          ticono?: string | null
          tnombre: string
        }
        Update: {
          bstateactivo?: boolean | null
          ecodcategoria?: string
          fhcreate?: string | null
          fhupdate?: string | null
          ticono?: string | null
          tnombre?: string
        }
        Relationships: []
      }
      cita: {
        Row: {
          ecodcita: string
          ecodempleado: string | null
          ecodnegocio: string
          ecodservicio: string
          ecodusuario: string
          eestado: number
          fhcita: string
          fhcreate: string | null
          fhupdate: string | null
          tnotas: string | null
        }
        Insert: {
          ecodcita?: string
          ecodempleado?: string | null
          ecodnegocio: string
          ecodservicio: string
          ecodusuario: string
          eestado?: number
          fhcita: string
          fhcreate?: string | null
          fhupdate?: string | null
          tnotas?: string | null
        }
        Update: {
          ecodcita?: string
          ecodempleado?: string | null
          ecodnegocio?: string
          ecodservicio?: string
          ecodusuario?: string
          eestado?: number
          fhcita?: string
          fhcreate?: string | null
          fhupdate?: string | null
          tnotas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cita_ecodempleado_fkey"
            columns: ["ecodempleado"]
            isOneToOne: false
            referencedRelation: "empleado"
            referencedColumns: ["ecodempleado"]
          },
          {
            foreignKeyName: "cita_ecodnegocio_fkey"
            columns: ["ecodnegocio"]
            isOneToOne: false
            referencedRelation: "negocio"
            referencedColumns: ["ecodnegocio"]
          },
          {
            foreignKeyName: "cita_ecodservicio_fkey"
            columns: ["ecodservicio"]
            isOneToOne: false
            referencedRelation: "servicio"
            referencedColumns: ["ecodservicio"]
          },
          {
            foreignKeyName: "cita_ecodusuario_fkey"
            columns: ["ecodusuario"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["ecodusuario"]
          },
        ]
      }
      empleado: {
        Row: {
          bstateactivo: boolean | null
          ecodempleado: string
          ecodnegocio: string
          fhcreate: string | null
          fhupdate: string | null
          tnombre: string
        }
        Insert: {
          bstateactivo?: boolean | null
          ecodempleado?: string
          ecodnegocio: string
          fhcreate?: string | null
          fhupdate?: string | null
          tnombre: string
        }
        Update: {
          bstateactivo?: boolean | null
          ecodempleado?: string
          ecodnegocio?: string
          fhcreate?: string | null
          fhupdate?: string | null
          tnombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "empleado_ecodnegocio_fkey"
            columns: ["ecodnegocio"]
            isOneToOne: false
            referencedRelation: "negocio"
            referencedColumns: ["ecodnegocio"]
          },
        ]
      }
      horariodisponible: {
        Row: {
          bstatedisponible: boolean | null
          ecodempleado: string | null
          ecodhorario: string
          ecodnegocio: string
          ediasemana: number | null
          ehorafin: string
          ehorainicio: string
          fhcreate: string | null
          fhfechaespecifica: string | null
          fhupdate: string | null
        }
        Insert: {
          bstatedisponible?: boolean | null
          ecodempleado?: string | null
          ecodhorario?: string
          ecodnegocio: string
          ediasemana?: number | null
          ehorafin: string
          ehorainicio: string
          fhcreate?: string | null
          fhfechaespecifica?: string | null
          fhupdate?: string | null
        }
        Update: {
          bstatedisponible?: boolean | null
          ecodempleado?: string | null
          ecodhorario?: string
          ecodnegocio?: string
          ediasemana?: number | null
          ehorafin?: string
          ehorainicio?: string
          fhcreate?: string | null
          fhfechaespecifica?: string | null
          fhupdate?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "horariodisponible_ecodempleado_fkey"
            columns: ["ecodempleado"]
            isOneToOne: false
            referencedRelation: "empleado"
            referencedColumns: ["ecodempleado"]
          },
          {
            foreignKeyName: "horariodisponible_ecodnegocio_fkey"
            columns: ["ecodnegocio"]
            isOneToOne: false
            referencedRelation: "negocio"
            referencedColumns: ["ecodnegocio"]
          },
        ]
      }
      negocio: {
        Row: {
          bstateactivo: boolean | null
          bstateverificado: boolean | null
          ecodnegocio: string
          ecodusuariodueno: string | null
          elatitud: number | null
          elongitud: number | null
          fhcreate: string | null
          fhupdate: string | null
          tciudad: string | null
          tdescripcion: string | null
          tdireccion: string | null
          temail: string | null
          tnombre: string
          ttelefono: string | null
        }
        Insert: {
          bstateactivo?: boolean | null
          bstateverificado?: boolean | null
          ecodnegocio?: string
          ecodusuariodueno?: string | null
          elatitud?: number | null
          elongitud?: number | null
          fhcreate?: string | null
          fhupdate?: string | null
          tciudad?: string | null
          tdescripcion?: string | null
          tdireccion?: string | null
          temail?: string | null
          tnombre: string
          ttelefono?: string | null
        }
        Update: {
          bstateactivo?: boolean | null
          bstateverificado?: boolean | null
          ecodnegocio?: string
          ecodusuariodueno?: string | null
          elatitud?: number | null
          elongitud?: number | null
          fhcreate?: string | null
          fhupdate?: string | null
          tciudad?: string | null
          tdescripcion?: string | null
          tdireccion?: string | null
          temail?: string | null
          tnombre?: string
          ttelefono?: string | null
        }
        Relationships: []
      }
      perfil: {
        Row: {
          ecodusuario: string
          erol: Database["public"]["Enums"]["rol_usuario"]
          fhcreate: string | null
        }
        Insert: {
          ecodusuario: string
          erol?: Database["public"]["Enums"]["rol_usuario"]
          fhcreate?: string | null
        }
        Update: {
          ecodusuario?: string
          erol?: Database["public"]["Enums"]["rol_usuario"]
          fhcreate?: string | null
        }
        Relationships: []
      }
      servicio: {
        Row: {
          bstateactivo: boolean | null
          ecodcategoria: string
          ecodnegocio: string
          ecodservicio: string
          eduracion: number
          eprecio: number
          fhcreate: string | null
          fhupdate: string | null
          tdescripcion: string | null
          tnombre: string
        }
        Insert: {
          bstateactivo?: boolean | null
          ecodcategoria: string
          ecodnegocio: string
          ecodservicio?: string
          eduracion: number
          eprecio: number
          fhcreate?: string | null
          fhupdate?: string | null
          tdescripcion?: string | null
          tnombre: string
        }
        Update: {
          bstateactivo?: boolean | null
          ecodcategoria?: string
          ecodnegocio?: string
          ecodservicio?: string
          eduracion?: number
          eprecio?: number
          fhcreate?: string | null
          fhupdate?: string | null
          tdescripcion?: string | null
          tnombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "servicio_ecodcategoria_fkey"
            columns: ["ecodcategoria"]
            isOneToOne: false
            referencedRelation: "categoria"
            referencedColumns: ["ecodcategoria"]
          },
          {
            foreignKeyName: "servicio_ecodnegocio_fkey"
            columns: ["ecodnegocio"]
            isOneToOne: false
            referencedRelation: "negocio"
            referencedColumns: ["ecodnegocio"]
          },
        ]
      }
      usuario: {
        Row: {
          bstateactivo: boolean | null
          ecodusuario: string
          fhcreate: string | null
          fhupdate: string | null
          temail: string | null
          tnombre: string
          ttelefono: string | null
        }
        Insert: {
          bstateactivo?: boolean | null
          ecodusuario?: string
          fhcreate?: string | null
          fhupdate?: string | null
          temail?: string | null
          tnombre: string
          ttelefono?: string | null
        }
        Update: {
          bstateactivo?: boolean | null
          ecodusuario?: string
          fhcreate?: string | null
          fhupdate?: string | null
          temail?: string | null
          tnombre?: string
          ttelefono?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      rol_usuario: "cliente" | "negocio" | "sistemas"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      rol_usuario: ["cliente", "negocio", "sistemas"],
    },
  },
} as const
