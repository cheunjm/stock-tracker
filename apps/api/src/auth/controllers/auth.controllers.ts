import type { PrismaClient } from "@stock-tracker/prisma";
import { authModels } from "../models/index.js";

export const authControllers = (prisma: PrismaClient) => {
  const models = authModels(prisma);

  return {
    me: async (userId?: string) => {
      if (!userId) return null;

      const user = await models.findById(userId);
      if (!user) return null;

      return {
        id: user.id,
        supabaseId: user.supabase_id,
        email: user.email,
        displayName: user.display_name,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      };
    },
  };
};
