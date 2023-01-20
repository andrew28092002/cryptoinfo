export interface Link {
  name: string;
  url: string;
  type: string;
}

export interface Supply {
  confirmed: boolean;
  circulating: number;
  total: number;
}

export interface AllTimeHigh {
  price: number;
  timestamp: number;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  ['24hVolume']: number;
  marketCap: number;
  price: number;
  btcPrice: string;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
}

export interface Data {
  coin: Coin;
}

export interface CoinData {
  status: string;
  data: Data;
}
