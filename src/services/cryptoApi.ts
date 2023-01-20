import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinData } from "../types/coin";
import { CryptoHistory } from "../types/cryptoHistory";
import { Cryptos } from "../types/cryptos";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "9c00f6d5a2mshf74a0676c71e7f9p106b61jsnb349f80bbb7e",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => {
  return {
    url,
    headers: cryptoApiHeaders,
  };
};

export type CryptoHistoryArgs = {
  coinId: string,
  timePeriod: string
}

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<Cryptos, number>({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
    getCoinFromId: builder.query<CoinData, string>({
      query: id => createRequest('/coin/'+id)
    }),
    getCryptoHistory: builder.query<CryptoHistory, CryptoHistoryArgs>({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    })
  }),
});


export const { useGetCryptosQuery, useGetCoinFromIdQuery, useGetCryptoHistoryQuery} = cryptoApi;
