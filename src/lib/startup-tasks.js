/** Give rendering and input a turn between synchronous setup steps. */
export function yieldToBrowser() {
  if (window.scheduler?.yield) return window.scheduler.yield();
  return new Promise((resolve) => window.setTimeout(resolve, 0));
}

export async function runStartupTasks(
  tasks,
  {
    runTask = (task) => task(),
    isCancelled = () => false,
    yieldTask = yieldToBrowser,
  } = {},
) {
  for (let index = 0; index < tasks.length; index += 1) {
    if (isCancelled()) return false;
    runTask(tasks[index]);
    if (index < tasks.length - 1) await yieldTask();
  }
  return !isCancelled();
}
