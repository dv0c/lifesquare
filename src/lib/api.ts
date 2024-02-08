import { ParamsTypes } from "@/types";
import axios from "axios";

export async function api(url: string, params: ParamsTypes) {
  const URL = "https://fetch-articles.digitalpress.blog/ghost/api/content/";
  const KEY = "cdd337364fc7e2cce30d94123d";

  return await axios.get(URL + url, {
    params: {
      key: KEY,
      filter: "visibility:public",
      ...params,
    },
  });
}
