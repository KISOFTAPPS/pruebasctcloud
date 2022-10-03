import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterApp from "./router/RouterApp";
import "./normalize.css";
import "./App.css";
import 'animate.css';
import { Provider } from "react-redux";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
