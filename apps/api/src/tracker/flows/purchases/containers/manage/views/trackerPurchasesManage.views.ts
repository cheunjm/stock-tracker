import { z } from "zod";
import {
  uuidSchema,
  purchaseCreateInputSchema,
  purchaseUpdateInputSchema,
  purchaseOutputSchema,
} from "@stock-tracker/validation";

export const trackerPurchasesManageViews = {
  create: {
    input: z.object({ accountId: uuidSchema }).merge(purchaseCreateInputSchema),
    output: purchaseOutputSchema,
  },
  update: {
    input: z.object({ id: uuidSchema }).merge(purchaseUpdateInputSchema),
    output: purchaseOutputSchema,
  },
  delete: {
    input: z.object({ id: uuidSchema }),
    output: z.object({ success: z.boolean() }),
  },
};
