import type { PrismaClient } from "@stock-tracker/prisma";

export const trackerDashboardHomeModels = (prisma: PrismaClient) => ({
  getAccountCount: async (userId: string) => {
    return prisma.tracker_accounts.count({
      where: { auth_user_id: userId },
    });
  },

  getPurchaseCount: async (userId: string) => {
    return prisma.tracker_purchases.count({
      where: { tracker_account: { auth_user_id: userId } },
    });
  },

  getTotalSpent: async (userId: string) => {
    const result = await prisma.tracker_purchases.aggregate({
      where: { tracker_account: { auth_user_id: userId } },
      _sum: { amount: true },
    });
    return result._sum.amount;
  },
});
