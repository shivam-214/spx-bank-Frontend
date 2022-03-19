import React, { useEffect, useState } from "react";
import axios from "axios";

const TransferMoney = () => {
  // Sender Information
  const [senderName, setSenderName] = useState("");
  const [isSenderNameExist, setIsSenderNameExist] = useState(true);

  // Recipient Information
  const [recipientName, setRecipientName] = useState("");
  const [isRecipientNameExist, setIsRecipientNameExist] = useState(true);

  const [amount, setAmount] = useState("");
  const [isAmountValid, setIsAmountValid] = useState(true);

  // Message
  const [info, setInfo] = useState("");

  // Form Info
  const [data, setData] = useState({
    sender: "",
    recipient: "",
    amount: 0,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isSenderNameExist && isRecipientNameExist && +amount > 0) {
      setIsFormValid(true);
    }
  }, [isRecipientNameExist, isSenderNameExist, amount]);

  const changeHandler = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      axios({
        method: "post",
        url: "https://spx-bank.herokuapp.com/api/customers/transfer-money",
        data: data,
      })
        .then((res) => {
          setInfo(res.data);
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  };
  const amountBlurHandler = (event) => {
    if (event.target.value > 0) {
      setIsAmountValid(true);
    } else {
      setIsAmountValid(false);
    }
  };
  return (
    <div className="Transfer">
      <form onSubmit={submitHandler}>
        <h1>TRANSFER MONEY</h1>
        <h2 style={{ color: info === "Insufficient Balance!" ? "red" : "" }}>
          {info}
        </h2>
        <div>
          <input
            id="sender"
            style={{
              borderColor: isSenderNameExist || senderName === "" ? "" : "red",
            }}
            type="text"
            required
            placeholder="Sender's Name"
            value={senderName}
            onChange={(event) => {
              setSenderName(event.target.value);
              changeHandler(event);
            }}
            onBlur={(event) => {
              axios
                .get(
                  "https://spx-bank.herokuapp.com/api/customers/" + event.target.value
                )
                .then((res) => {
                  setIsSenderNameExist(res.data);
                });
            }}
          />
          {isSenderNameExist || senderName === "" ? (
            ""
          ) : (
            <p>!! Incorrect Sender Name !!</p>
          )}
          <input
            id="recipient"
            type="text"
            required
            placeholder="Recipient's Name"
            value={recipientName}
            style={{
              borderColor:
                isRecipientNameExist || recipientName === "" ? "" : "red",
            }}
            onChange={(event) => {
              setRecipientName(event.target.value);
              changeHandler(event);
            }}
            onBlur={(event) => {
              axios
                .get(
                  "https://spx-bank.herokuapp.com/api/customers/" +
                    event.target.value
                )
                .then((res) => {
                  setIsRecipientNameExist(res.data);
                });
            }}
          />
          {isRecipientNameExist || recipientName === "" ? (
            ""
          ) : (
            <p>Incorrect Recipient Name !!</p>
          )}
          <input
            id="amount"
            type="number"
            required
            placeholder="Amount"
            style={{
              borderColor: isAmountValid ? "" : "red",
            }}
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              changeHandler(event);
            }}
            onBlur={amountBlurHandler}
          />
          {isAmountValid ? "" : <p>Please Enter Valid Amount !!</p>}
        </div>
        <button disabled={!isFormValid} type="submit">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferMoney;
