import Blocks from "../Components/Blocks";
import Axios from "axios";
import { useState, useEffect } from "react";

const TransactionHistory = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    Axios.get("https://spx-bank.herokuapp.com/api/history").then(function (
      response
    ) {
      setHistory(response.data);
    });
  }, []);
  return (
    <div className="History">
      <h1>Transaction history</h1>
      {history.map((val, key) => {
        return (
          <Blocks
            key={key}
            index={key + 1}
            time={val.Time}
            sname={val.SenderName}
            rname={val.RecipientName}
            amount={val.Amount}
            status={val.Status}
          />
        );
      })}
    </div>
  );
};

export default TransactionHistory;
