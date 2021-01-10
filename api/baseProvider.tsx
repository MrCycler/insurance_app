import * as config from "../config/index.tsx";

const buildUrl = (url, params = {}) => {
  const queries = Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");

  if (!queries.length) return `${config.serverUrl}${url}`;

  return `${config.serverUrl}${url}?${queries}`;
};

const validate = (responseJson) => {
  if (responseJson.status >= 400) throw responseJson;
  return responseJson.data || responseJson;
};

export const baseProvider = {
  httpPost: async (url, body = {}) => {
    const response = await fetch(buildUrl(url), {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
    });
    const responseJson = await response.json();
    return validate(responseJson);
  },
};
