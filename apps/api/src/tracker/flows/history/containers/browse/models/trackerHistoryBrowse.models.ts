import type { PrismaClient } from "@stock-tracker/prisma";

export const trackerHistoryBrowseModels = (prisma: PrismaClient) => ({
  list: async (params: {
    userId: string;
    accountId?: string;
    cursor?: string;
    limit: number;
    sortOrder: "asc" | "desc";
  }) => {
    const where: Record<string, unknown> = {
      tracker_account: { auth_user_id: params.userId },
    };
    if (params.accountId) {
      where.tracker_account_id = params.accountId;
    }

    return prisma.tracker_purchases.findMany({
      where,
      include: {
        tracker_account: {
          select: { id: true, store_name: true },
        },
      },
      orderBy: { purchase_date: params.sortOrder },
      take: params.limit + 1,
      ...(params.cursor && {
        cursor: { id: params.cursor },
        skip: 1,
      }),
    });
  },
});
