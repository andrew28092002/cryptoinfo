import React, { FC, useEffect, useState } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { Coin } from "../../types/cryptos";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";

type Props = {
  simplified?: boolean;
};

const CryptoCurrencies: FC<Props> = ({ simplified }) => {
  const count: number = simplified ? 10 : 100;

  const { data: cryptosList, isLoading } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState<Coin[]>([]);

  useEffect(() => {
    if (cryptosList) {
      const filteredData = cryptosList.data.coins.filter((coin) =>
        coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

      setCryptos(filteredData);
    }
  }, [cryptosList, searchTerm]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search CryptoCurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-cards-container">
        {cryptos?.map((currency) => {
          return (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={"/crypto/" + currency.uuid}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>

                  <p>Market Cap: {millify(currency.marketCap)}</p>

                  <p>Daily Change: {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
