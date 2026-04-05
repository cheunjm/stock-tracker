import type { TrpcClient } from "../../clients/trpc.js";

interface SubgraphContext {
  userId?: string;
  userRole?: string;
  trpc: TrpcClient;
}

export const trackerResolvers = {
  Query: {
    dashboard: async (_: unknown, __: unknown, context: SubgraphContext) => {
      return context.trpc.tracker.dashboard.home.summary.query();
    },
    accounts: async (_: unknown, __: unknown, context: SubgraphContext) => {
      return context.trpc.tracker.accounts.list.all.query();
    },
    account: async (
      _: unknown,
      args: { id: string },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.accounts.detail.byId.query(args);
    },
    purchases: async (
      _: unknown,
      args: { accountId?: string },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.history.browse.list.query(args);
    },
  },
  Mutation: {
    createAccount: async (
      _: unknown,
      args: { input: { storeName: string; saName?: string; notes?: string } },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.accounts.list.create.mutate(args.input);
    },
    updateAccount: async (
      _: unknown,
      args: {
        input: {
          id: string;
          storeName?: string;
          saName?: string;
          notes?: string;
        };
      },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.accounts.detail.update.mutate(args.input);
    },
    deleteAccount: async (
      _: unknown,
      args: { id: string },
      context: SubgraphContext,
    ) => {
      await context.trpc.tracker.accounts.detail.delete.mutate({
        id: args.id,
      });
      return true;
    },
    createPurchase: async (
      _: unknown,
      args: {
        input: {
          accountId: string;
          itemName: string;
          amount: number;
          purchaseDate: string;
          itemCategory?: string;
          currency?: string;
          storeLocation?: string;
          notes?: string;
        };
      },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.purchases.create.mutate(args.input);
    },
    updatePurchase: async (
      _: unknown,
      args: {
        input: {
          id: string;
          itemName?: string;
          itemCategory?: string;
          amount?: number;
          currency?: string;
          purchaseDate?: string;
          storeLocation?: string;
          notes?: string;
        };
      },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.purchases.update.mutate(args.input);
    },
    deletePurchase: async (
      _: unknown,
      args: { id: string },
      context: SubgraphContext,
    ) => {
      await context.trpc.tracker.purchases.delete.mutate({ id: args.id });
      return true;
    },
  },
  Account: {
    __resolveReference: async (
      ref: { id: string },
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.accounts.detail.byId.query({ id: ref.id });
    },
    purchases: async (
      parent: { id: string },
      _: unknown,
      context: SubgraphContext,
    ) => {
      return context.trpc.tracker.history.browse.list.query({
        accountId: parent.id,
      });
    },
  },
  Purchase: {
    __resolveReference: async (ref: { id: string }) => {
      return ref;
    },
  },
};
