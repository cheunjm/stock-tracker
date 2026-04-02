import type { PrismaClient } from "@stock-tracker/prisma";
import { trackerDashboardHomeModels } from "../models/index.js";

export const trackerDashboardHomeControllers = (prisma: PrismaClient) => {
  const models = trackerDashboardHomeModels(prisma);

  return {
    summary: async (userId: string) => {
      const [totalAccounts, totalPurchases, totalSpentDecimal] =
        await Promise.all([
          models.getAccountCount(userId),
          models.getPurchaseCount(userId),
          models.getTotalSpent(userId),
        ]);

      return {
        totalAccounts,
        totalPurchases,
        totalSpent: totalSpentDecimal?.toString() ?? "0",
      };
    },
  };
};
