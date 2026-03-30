import type { z } from "zod";
import type {
  accountOutputSchema,
  purchaseOutputSchema,
  userOutputSchema,
} from "@stock-tracker/validation";

export type Account = z.infer<typeof accountOutputSchema>;
export type Purchase = z.infer<typeof purchaseOutputSchema>;
export type User = z.infer<typeof userOutputSchema>;
