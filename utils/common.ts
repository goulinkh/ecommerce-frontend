const cache = {};

export function cachedFetch<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const key = input.toString();
  if (cache[key]) {
    return cache[key];
  } else {
    cache[key] = new Promise((s, f) => {
      fetch(input, init)
        .then((response) => {
          if (response.status >= 400) {
            f(
              new Error(`Strapi Server returned status code ${response.status}`)
            );
          }
          response.json().then(s).catch(f);
        })
        .catch(f);
    });
    return cache[key];
  }
}
