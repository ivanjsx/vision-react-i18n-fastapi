// constants
import { BASE_API_URL } from "./constants";

// types
import { CheckResult } from "./types";

// content

const checkResponseOk = (response: Response): Promise<CheckResult> => {
  return response.ok ? response.json() : response.json().then(
    (error) => Promise.reject(error)
  );
};

export const checkAddress = async (address: string): Promise<CheckResult> => {
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
