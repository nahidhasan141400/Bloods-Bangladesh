import { ConfigProvider } from "antd";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
   <Provider store={store}>
     <ConfigProvider>
      <Router />
    </ConfigProvider>
   </Provider>
  );
}

export default App;
