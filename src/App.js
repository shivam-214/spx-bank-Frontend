import Header from "./Components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Customer from "./Pages/Customer";
import TransferMoney from "./Pages/TransferMoney";
import TransactionHistory from "./Pages/TransactionHistory";
import Footer from "./Components/Footer";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/customers" element={<Customer />} />
      <Route path="/transfer-money" element={<TransferMoney />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
  return (
    <>
      <Header />
      <main>{routes}</main>
      <Footer />
    </>
  );
}

export default App;
