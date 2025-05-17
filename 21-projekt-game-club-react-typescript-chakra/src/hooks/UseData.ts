import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!endpoint) return; // فقط زمانی که endpoint موجود باشد API فراخوانی می‌شود.
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, requestConfig)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint, JSON.stringify(requestConfig)]); 

  return { data, error, isLoading };
};

export default useData;
