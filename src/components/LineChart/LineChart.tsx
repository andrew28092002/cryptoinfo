import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { CryptoHistory } from "../../types/cryptoHistory";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const { Title } = Typography;

type Props = {
  coinHistory: CryptoHistory;
  currentPrice: string;
  coinName: string;
};

const LineChart: FC<Props> = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }


  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory.data.change}
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} />
    </>
  );
};

export default LineChart;
