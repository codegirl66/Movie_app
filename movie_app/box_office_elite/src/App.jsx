import "./App.css";
import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
