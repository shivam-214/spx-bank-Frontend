import Axios from "axios";
import { useState, useEffect } from "react";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    Axios.get("https://spx-bank.herokuapp.com/api/customers").then(function (response) {
      setCustomerList(response.data);
    });
  }, []);

  return (
    <div className="CustomerList">
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Account Number</th>
            <th>Email</th>
            <th>Balance</th>
          </tr>
          {customerList.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.customerName}</td>
                <td>{val.customerAccount}</td>
                <td>{val.customerEmail}</td>
                <td>{val.customerBalance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
