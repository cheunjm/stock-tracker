import type { PrismaClient } from "@stock-tracker/prisma";

export const trackerDashboardHomeModels = (prisma: PrismaClient) => ({
  getAccountCount: async () => {
    return prisma.tracker_accounts.count();
  },

  getPurchaseCount: async () => {
    return prisma.tracker_purchases.count();
  },

  getTotalSpent: async () => {
    const result = await prisma.tracker_purchases.aggregate({
      _sum: { amount: true },
    });
    return result._sum.amount;
  },
});
