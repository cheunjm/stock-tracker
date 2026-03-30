import type { PrismaClient } from "@stock-tracker/prisma";
import { trackerDashboardHomeModels } from "../models/index.js";

export const trackerDashboardHomeControllers = (prisma: PrismaClient) => {
  const models = trackerDashboardHomeModels(prisma);

  return {
    summary: async () => {
      const [totalAccounts, totalPurchases, totalSpentDecimal] =
        await Promise.all([
          models.getAccountCount(),
          models.getPurchaseCount(),
          models.getTotalSpent(),
        ]);

      return {
        totalAccounts,
        totalPurchases,
        totalSpent: totalSpentDecimal?.toString() ?? "0",
      };
    },
  };
};
