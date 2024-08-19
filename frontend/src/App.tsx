import { ConfigProvider } from "antd";
import Router from "./routes/Router";
import { theme as AntTh } from "antd";
const { defaultAlgorithm } = AntTh;
function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          // Seed Token
          colorPrimary: "#f00",
          borderRadius: 10,

          // Alias Token
          colorBgContainer: "transparent",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
