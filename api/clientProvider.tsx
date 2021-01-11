import { baseProvider } from "./baseProvider.tsx";

const postClient = async (body) =>
  baseProvider.httpPost("/dummy/obtenerdatospersona", body);

export { postClient };
