export interface Thumbnail {
  _type: string;
  contentUrl: string;
  width: number;
  height: number;
}

export interface Image {
  _type: string;
  thumbnail: Thumbnail;
  isLicensed: boolean;
}

export interface Thumbnail2 {
  _type: string;
  contentUrl: string;
}

export interface Image2 {
  _type: string;
  thumbnail: Thumbnail2;
}

export interface Provider {
  _type: string;
  name: string;
  image: Image2;
}

export interface Value {
  _type: string;
  name: string;
  url: string;
  image: Image;
  description: string;
  provider: Provider[];
  datePublished: Date;
}

export interface CryptoNews {
  _type: string;
  webSearchUrl: string;
  value: Value[];
}
