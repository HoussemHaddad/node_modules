/**
 * Clears out the shared fake async zone for a test.
 * To be called in a global `beforeEach`.
 *
 * @experimental
 */
export declare function resetFakeAsyncZoneFallback(): void;
/**
 * Wraps a function to be executed in the fakeAsync zone:
 * - microtasks are manually executed by calling `flushMicrotasks()`,
 * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
 *
 * If there are any pending timers at the end of the function, an exception will be thrown.
 *
 * Can be used to wrap inject() calls.
 *
 * ## Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 * @param fn
 * @returns The function wrapped to be executed in the fakeAsync zone
 *
 * @experimental
 */
export declare function fakeAsyncFallback(fn: Function): (...args: any[]) => any;
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
 *
 * The microtasks queue is drained at the very start of this function and after any timer callback
 * has been executed.
 *
 * ## Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 * @experimental
 */
export declare function tickFallback(millis?: number): void;
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone by
 * draining the macrotask queue until it is empty. The returned value is the milliseconds
 * of time that would have been elapsed.
 *
 * @param maxTurns
 * @returns The simulated time elapsed, in millis.
 *
 * @experimental
 */
export declare function flushFallback(maxTurns?: number): number;
/**
 * Discard all remaining periodic tasks.
 *
 * @experimental
 */
export declare function discardPeriodicTasksFallback(): void;
/**
 * Flush any pending microtasks.
 *
 * @experimental
 */
export declare function flushMicrotasksFallback(): void;
