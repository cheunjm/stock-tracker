import { z } from "zod";
import {
  accountCreateInputSchema,
  accountOutputSchema,
} from "@stock-tracker/validation";

export const trackerAccountsListViews = {
  all: {
    output: z.array(accountOutputSchema),
  },
  create: {
    input: accountCreateInputSchema,
    output: accountOutputSchema,
  },
};
