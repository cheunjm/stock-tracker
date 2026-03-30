import type { PrismaClient } from "@stock-tracker/prisma";

export const authModels = (prisma: PrismaClient) => ({
  findById: async (id: string) => {
    return prisma.auth_users.findUnique({ where: { id } });
  },

  findBySupabaseId: async (supabaseId: string) => {
    return prisma.auth_users.findUnique({
      where: { supabase_id: supabaseId },
    });
  },
});
