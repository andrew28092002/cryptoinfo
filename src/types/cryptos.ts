export interface Stats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
}

export interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: number;
    price: number;
    listedAt: number;
    tier: number;
    change: number;
    rank: number;
    sparkline: string[];
    lowVolume: boolean;
    coinrankingUrl: string;
    ['24hVolume']: string;
    btcPrice: string;
}

export interface Data {
    stats: Stats;
    coins: Coin[];
}

export interface Cryptos {
    status: string;
    data: Data;
}