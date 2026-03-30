import type { PrismaClient } from "@stock-tracker/prisma";
import { trackerHistoryBrowseModels } from "../models/index.js";

export const trackerHistoryBrowseControllers = (prisma: PrismaClient) => {
  const models = trackerHistoryBrowseModels(prisma);

  return {
    list: async (input: {
      accountId?: string;
      cursor?: string;
      limit: number;
      sortOrder: "asc" | "desc";
    }) => {
      const results = await models.list(input);

      let nextCursor: string | null = null;
      if (results.length > input.limit) {
        const nextItem = results.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: results.map((p) => ({
          id: p.id,
          trackerAccountId: p.tracker_account_id,
          itemName: p.item_name,
          itemCategory: p.item_category,
          amount: p.amount.toString(),
          currency: p.currency,
          purchaseDate: p.purchase_date,
          storeLocation: p.store_location,
          notes: p.notes,
          createdAt: p.created_at,
          updatedAt: p.updated_at,
          trackerAccount: {
            id: p.tracker_account.id,
            storeName: p.tracker_account.store_name,
          },
        })),
        nextCursor,
      };
    },
  };
};
