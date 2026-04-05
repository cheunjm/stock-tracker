import type { PrismaClient } from "@stock-tracker/prisma";
import { TRPCError } from "@trpc/server";
import { trackerPurchasesManageModels } from "../models/index.js";

type PurchaseRow = NonNullable<
  Awaited<
    ReturnType<ReturnType<typeof trackerPurchasesManageModels>["findById"]>
  >
>;

const mapPurchase = (p: Omit<PurchaseRow, "tracker_account">) => ({
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
});

export const trackerPurchasesManageControllers = (prisma: PrismaClient) => {
  const models = trackerPurchasesManageModels(prisma);

  return {
    create: async (
      input: {
        accountId: string;
        itemName: string;
        amount: number;
        purchaseDate: string;
        itemCategory?: string;
        currency?: string;
        storeLocation?: string;
        notes?: string;
      },
      userId: string,
    ) => {
      const account = await prisma.tracker_accounts.findUnique({
        where: { id: input.accountId },
      });
      if (!account) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Account ${input.accountId} not found`,
        });
      }
      if (account.auth_user_id !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to add purchases to this account",
        });
      }

      const purchase = await models.create({
        trackerAccountId: input.accountId,
        itemName: input.itemName,
        amount: input.amount,
        purchaseDate: input.purchaseDate,
        itemCategory: input.itemCategory,
        currency: input.currency,
        storeLocation: input.storeLocation,
        notes: input.notes,
      });
      return mapPurchase(purchase);
    },

    update: async (
      input: {
        id: string;
        itemName?: string;
        itemCategory?: string | null;
        amount?: number;
        currency?: string;
        purchaseDate?: string;
        storeLocation?: string | null;
        notes?: string | null;
      },
      userId: string,
    ) => {
      const existing = await models.findById(input.id);
      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Purchase ${input.id} not found`,
        });
      }
      if (existing.tracker_account.auth_user_id !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to modify this purchase",
        });
      }

      const data: Record<string, unknown> = {};
      if (input.itemName !== undefined) data.item_name = input.itemName;
      if (input.itemCategory !== undefined)
        data.item_category = input.itemCategory;
      if (input.amount !== undefined) data.amount = input.amount;
      if (input.currency !== undefined) data.currency = input.currency;
      if (input.purchaseDate !== undefined)
        data.purchase_date = new Date(input.purchaseDate);
      if (input.storeLocation !== undefined)
        data.store_location = input.storeLocation;
      if (input.notes !== undefined) data.notes = input.notes;

      const updated = await models.update(input.id, data as never);
      return mapPurchase(updated);
    },

    delete: async (input: { id: string }, userId: string) => {
      const existing = await models.findById(input.id);
      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Purchase ${input.id} not found`,
        });
      }
      if (existing.tracker_account.auth_user_id !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to delete this purchase",
        });
      }
      await models.delete(input.id);
      return { success: true as const };
    },
  };
};
