import React, { Fragment, Suspense } from "react";
import Header from "./Components/Header";
import { Navigate, Route, Routes } from "react-router-dom";

import LoadingSpinner from "./Components/LoadingSpinner";
import Footer from "./Components/Footer";

const Homepage = React.lazy(() => import("./Pages/Homepage"));
const Customer = React.lazy(() => import("./Pages/Customer"));
const TransferMoney = React.lazy(() => import("./Pages/TransferMoney"));
const TransactionHistory = React.lazy(() =>
  import("./Pages/TransactionHistory")
);

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
    <Fragment>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
