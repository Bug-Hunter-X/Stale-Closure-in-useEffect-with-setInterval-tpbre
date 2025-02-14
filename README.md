# Stale Closure Bug in React

This repository demonstrates a common error in React components when using `setInterval` inside `useEffect` hooks.  The problem stems from closures and how variables are captured. The incorrect implementation leads to the counter not incrementing correctly. The solution showcases the correct approach.

## Bug Description

The incorrect `MyComponent` uses `setInterval` to update the count every second. However, the callback function passed to `setInterval` captures the initial value of `setCount`, resulting in stale closures. This means the counter might not update properly because it's always using the initial `setCount` function rather than the latest one.

## Solution

The `bugSolution.js` provides the correct implementation.  Instead of directly calling `setCount`, it uses a functional update pattern with `setCount(prevCount => prevCount + 1)`. This ensures that the `setCount` function always reflects the latest state.