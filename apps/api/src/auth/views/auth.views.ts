import { z } from "zod";
import { userOutputSchema } from "@stock-tracker/validation";

export const authViews = {
  me: {
    output: userOutputSchema.nullable(),
  },
};
