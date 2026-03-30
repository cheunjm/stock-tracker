import { z } from "zod";
import {
  uuidSchema,
  paginationInputSchema,
  sortOrderSchema,
  purchaseWithAccountOutputSchema,
} from "@stock-tracker/validation";

export const trackerHistoryBrowseViews = {
  list: {
    input: z
      .object({
        accountId: uuidSchema.optional(),
        sortOrder: sortOrderSchema,
      })
      .merge(paginationInputSchema),
    output: z.object({
      items: z.array(purchaseWithAccountOutputSchema),
      nextCursor: z.string().uuid().nullable(),
    }),
  },
};
