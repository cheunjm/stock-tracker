import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { PrismaClient } from "@prisma/client";
import { appRouter } from "../trpc/router.js";

const prisma = new PrismaClient();
const caller = appRouter.createCaller({ prisma });

const TEST_USER_ID = "00000000-0000-0000-0000-000000000000";

before(async () => {
  await prisma.auth_users.upsert({
    where: { id: TEST_USER_ID },
    update: {},
    create: {
      id: TEST_USER_ID,
      supabase_id: TEST_USER_ID,
      email: "e2e@test.local",
    },
  });
});

after(async () => {
  await prisma.tracker_purchases.deleteMany({});
  await prisma.tracker_accounts.deleteMany({});
  await prisma.auth_users.deleteMany({ where: { id: TEST_USER_ID } });
  await prisma.$disconnect();
});

describe("tRPC API E2E", () => {
  let accountId: string;

  it("creates an account", async () => {
    const result = await caller.tracker.accounts.list.create({
      storeName: "E2E Test Store",
      saName: "Test SA",
    });

    assert.ok(result.id);
    assert.equal(result.storeName, "E2E Test Store");
    assert.equal(result.saName, "Test SA");
    accountId = result.id;
  });

  it("lists accounts", async () => {
    const accounts = await caller.tracker.accounts.list.all();
    assert.ok(accounts.length >= 1);
    assert.ok(accounts.some((a) => a.id === accountId));
  });

  it("gets dashboard summary", async () => {
    const summary = await caller.tracker.dashboard.home.summary();
    assert.ok(summary.totalAccounts >= 1);
    assert.ok(summary.totalSpent !== undefined);
  });

  it("gets account by id", async () => {
    const account = await caller.tracker.accounts.detail.byId({
      id: accountId,
    });
    assert.equal(account.id, accountId);
    assert.equal(account.storeName, "E2E Test Store");
  });

  it("updates an account", async () => {
    const updated = await caller.tracker.accounts.detail.update({
      id: accountId,
      storeName: "Updated Store",
      notes: "updated via e2e",
    });
    assert.equal(updated.storeName, "Updated Store");
    assert.equal(updated.notes, "updated via e2e");
  });

  it("deletes an account", async () => {
    const deleted = await caller.tracker.accounts.detail.delete({
      id: accountId,
    });
    assert.equal(deleted.success, true);

    const accounts = await caller.tracker.accounts.list.all();
    assert.ok(!accounts.some((a) => a.id === accountId));
  });
});
