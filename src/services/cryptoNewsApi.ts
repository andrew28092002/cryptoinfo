import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CryptoNews } from "../types/cryptoNews";

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "9c00f6d5a2mshf74a0676c71e7f9p106b61jsnb349f80bbb7e",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl: string = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers });

type params = {
  newsCategory: string;
  count: number;
};

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<CryptoNews, params>({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});


export const {useGetCryptoNewsQuery} = cryptoNewsApi