import { z } from "zod";
import { purchaseOutputSchema } from "./purchase.js";

export const accountCreateInputSchema = z.object({
  storeName: z.string().min(1).max(255),
  saName: z.string().max(255).optional(),
  notes: z.string().max(1000).optional(),
});

export const accountUpdateInputSchema = z.object({
  id: z.string().uuid(),
  storeName: z.string().min(1).max(255).optional(),
  saName: z.string().max(255).nullish(),
  notes: z.string().max(1000).nullish(),
});

export const accountOutputSchema = z.object({
  id: z.string().uuid(),
  authUserId: z.string().uuid(),
  storeName: z.string(),
  saName: z.string().nullable(),
  notes: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const accountWithPurchasesOutputSchema = accountOutputSchema.extend({
  purchases: z.array(purchaseOutputSchema),
});
