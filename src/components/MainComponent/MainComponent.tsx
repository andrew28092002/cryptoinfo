import NewsPage from "../NewsPage/NewsPage";
import HomePage from "../HomePage/HomePage";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import { Link, Routes, Route } from "react-router-dom";
import { Typography, Layout, Space } from "antd";

const { Title } = Typography;

const MainComponent = () => {
  return (
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Title level={5} style={{ color: "white", textAlign: "center" }}>
          <Link to="/">Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Title>
        <Space
          align="center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default MainComponent;
