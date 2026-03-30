import type { PrismaClient } from "@stock-tracker/prisma";
import { trackerAccountsListModels } from "../models/index.js";

const mapAccount = (a: {
  id: string;
  auth_user_id: string;
  store_name: string;
  sa_name: string | null;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
}) => ({
  id: a.id,
  authUserId: a.auth_user_id,
  storeName: a.store_name,
  saName: a.sa_name,
  notes: a.notes,
  createdAt: a.created_at,
  updatedAt: a.updated_at,
});

export const trackerAccountsListControllers = (prisma: PrismaClient) => {
  const models = trackerAccountsListModels(prisma);

  return {
    all: async () => {
      const accounts = await models.findAll();
      return accounts.map(mapAccount);
    },

    create: async (input: {
      storeName: string;
      saName?: string;
      notes?: string;
    }) => {
      // TODO: get userId from context when auth is wired
      const placeholderUserId = "00000000-0000-0000-0000-000000000000";
      const account = await models.create({
        authUserId: placeholderUserId,
        ...input,
      });
      return mapAccount(account);
    },
  };
};
