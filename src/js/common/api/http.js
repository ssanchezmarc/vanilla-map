const request = async (options, dependencies = {}) => {
  const { body, host, method, path, query, headers } = options;
  const { requester = fetch } = dependencies;

  const url = host + path + (query ? `?${query}` : "");
  const httpConfig = {
    method,
    ...(body ? { body } : {}),
    ...(headers ? { headers } : {})
  };

  return await requester(url, httpConfig);
};

export const get = options => request({ ...options, method: "get" });
