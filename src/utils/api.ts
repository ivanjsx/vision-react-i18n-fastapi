// constants
import { BASE_API_URL } from "./constants";

// content

const checkResponseOk = (response: Response): Promise<Response> => {
  return response.ok ? response.json() : Promise.reject(response);
};

export const checkAddress = async (address: string): Promise<Response> => {
  const url = BASE_API_URL.concat("/check-ip");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ ip_address: address }),
  };
  return fetch(url, options).then(checkResponseOk);
};
