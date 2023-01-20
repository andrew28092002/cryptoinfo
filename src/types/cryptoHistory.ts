export interface History {
    price: string;
    timestamp: number;
}

export interface Data {
    change: string;
    history: History[];
}

export interface CryptoHistory {
    status: string;
    data: Data;
}