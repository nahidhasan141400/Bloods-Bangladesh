import { ConfigProvider } from "antd";
import Router from "./routes/Router";

function App() {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  );
}

export default App;
