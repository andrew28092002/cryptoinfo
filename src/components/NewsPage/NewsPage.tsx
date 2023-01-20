import React, { FC, useState } from "react";
import millify from "millify";
import Link from "antd/es/typography/Link";
import { Select, Typography, Row, Col, Input, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

type Props = {
  simplified?: boolean;
};

const { Title, Text } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsPage: FC<Props> = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const count = simplified ? 6 : 24;

  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: count,
  });

  if (!cryptoNews?.value) return <div>Loading...</div>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(val) => setNewsCategory(val)}
            filterOption={(input, option) =>
              (option?.children?.toLocaleString() ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option key={coin.name} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews!.value.map((news) => (
        <Col xs={24} sm={12} lg={8} key={news.url}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("minute").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsPage;
