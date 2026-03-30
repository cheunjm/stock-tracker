import type { PrismaClient } from "@stock-tracker/prisma";

export const trackerHistoryBrowseModels = (prisma: PrismaClient) => ({
  list: async (params: {
    accountId?: string;
    cursor?: string;
    limit: number;
    sortOrder: "asc" | "desc";
  }) => {
    const where = params.accountId
      ? { tracker_account_id: params.accountId }
      : undefined;

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
