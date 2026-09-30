import assert from "node:assert/strict";
import test from "node:test";
import { runStartupTasks, yieldToBrowser } from "../src/lib/startup-tasks.js";

test("setup preserves dependency order and allows browser work between steps", async () => {
  const events = [];
  const completed = await runStartupTasks(
    [() => events.push("geometry"), () => events.push("interactions")],
    {
      runTask: (task) => {
        events.push("context");
        task();
      },
      yieldTask: async () => events.push("browser"),
    },
  );
  assert.equal(completed, true);
  assert.deepEqual(events, [
    "context",
    "geometry",
    "browser",
    "context",
    "interactions",
  ]);
});

test("a disposed mount cannot resume setup after an asynchronous boundary", async () => {
  let disposed = false;
  let resume;
  const events = [];
  const startup = runStartupTasks(
    [() => events.push("first"), () => events.push("must not run")],
    {
      isCancelled: () => disposed,
      yieldTask: () => new Promise((resolve) => (resume = resolve)),
    },
  );
  disposed = true;
  resume();
  assert.equal(await startup, false);
  assert.deepEqual(events, ["first"]);
});

test("browser scheduling uses scheduler.yield with a timer fallback", async () => {
  const events = [];
  const originalWindow = globalThis.window;
  try {
    globalThis.window = {
      scheduler: { yield: async () => events.push("scheduler") },
    };
    await yieldToBrowser();
    globalThis.window = {
      setTimeout: (resolve, delay) => {
        assert.equal(delay, 0);
        events.push("timer");
        resolve();
      },
    };
    await yieldToBrowser();
    assert.deepEqual(events, ["scheduler", "timer"]);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
});
