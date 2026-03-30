import { router, publicProcedure } from "./trpc.js";
import { authControllers } from "../auth/controllers/index.js";
import { authViews } from "../auth/views/index.js";

export const authRouter = router({
  me: publicProcedure.output(authViews.me.output).query(async ({ ctx }) => {
    const ctrl = authControllers(ctx.prisma);
    return ctrl.me(undefined);
  }),
});
