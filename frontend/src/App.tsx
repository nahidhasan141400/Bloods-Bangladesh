import { ConfigProvider } from "antd";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { theme as AntTh } from "antd";
import { Toaster } from "sonner";
const { defaultAlgorithm } = AntTh;
function App() {
  return (
    <Provider store={store}>
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
    <Toaster position="top-center" />
   </Provider>
  );
}

export default App;
