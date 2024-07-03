const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  const currentCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, currentCount + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  return weakMap.get(endpoint);
}
