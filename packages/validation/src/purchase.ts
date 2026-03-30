import { z } from "zod";

export const purchaseOutputSchema = z.object({
  id: z.string().uuid(),
  trackerAccountId: z.string().uuid(),
  itemName: z.string(),
  itemCategory: z.string().nullable(),
  amount: z.string(),
  currency: z.string(),
  purchaseDate: z.date(),
  storeLocation: z.string().nullable(),
  notes: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const purchaseWithAccountOutputSchema = purchaseOutputSchema.extend({
  trackerAccount: z.object({
    id: z.string().uuid(),
    storeName: z.string(),
  }),
});
