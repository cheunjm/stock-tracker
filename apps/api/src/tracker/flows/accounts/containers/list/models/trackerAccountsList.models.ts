import type { PrismaClient } from "@stock-tracker/prisma";

export const trackerAccountsListModels = (prisma: PrismaClient) => ({
  findAll: async (userId: string) => {
    return prisma.tracker_accounts.findMany({
      where: { auth_user_id: userId },
      orderBy: { created_at: "desc" },
    });
  },

  create: async (data: {
    authUserId: string;
    storeName: string;
    saName?: string;
    notes?: string;
  }) => {
    return prisma.tracker_accounts.create({
      data: {
        auth_user_id: data.authUserId,
        store_name: data.storeName,
        sa_name: data.saName,
        notes: data.notes,
      },
    });
  },
});
