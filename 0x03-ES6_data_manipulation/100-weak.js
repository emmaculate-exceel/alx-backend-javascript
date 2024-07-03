const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint configuration');
  }

  const count = weakMap.get(endpoint) || 0;
  count + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error(`Endpoint load is high: ${endpoint.protocol}/${endpoint.name}`);
  }

  console.log(`Querying API for endpoint: ${endpoint.protocol}/${endpoint.name}`);
  return `Response for ${endpoint.protocol}/${endpoint.name}`;
}
