import React, { Component } from "react";
import { getAllOrders } from "../utils/firebaseFunctions";
import { useNavigate } from "react-router-dom";
import "./reportStyling.css";
import { Timestamp } from "firebase/firestore";

class AllOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
    const { navigate } = props;
    this.navigate = navigate;
  }

  componentDidMount() {
    getAllOrders().then((res) => {
      this.setState({
        orders: res,
      });
    });
  }

  confirm() {}

  reject() {}

  render() {
    return (
      <div className="">
        <h2 className="text-lg font-bold m-2 text-center">All Orders List</h2>
        <div className="my-5">
          <table className="table-fixed m-auto">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>User Email</th>
                <th>Grand Total</th>
                <th>Items Ordered</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.orders.map((order) => (
                <tr key={order.date_time.nanoseconds}>
                  <td>
                    {new Timestamp(
                      order.date_time.seconds,
                      order.date_time.nanoseconds
                    )
                      .toDate()
                      .toDateString()}
                  </td>
                  <td>
                    {new Timestamp(
                      order.date_time.seconds,
                      order.date_time.nanoseconds
                    )
                      .toDate()
                      .toTimeString()}
                  </td>
                  <td>{order.userEmail}</td>
                  <td>{order.grandTotal}</td>
                  <td>
                    {order.orderedItems.map((item) => (
                      <p>{item.name}</p>
                    ))}
                  </td>
                  <td className="w-fit">
                    <button
                      className="py-2 m-1 bg-blue-500 text-white"
                      onClick={() => this.confirm(order.id)}
                    >
                      Confirm
                    </button>
                    <button
                      className="py-2 m-1 bg-red-500 text-white"
                      onClick={() => this.reject(order.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <AllOrders {...props} navigate={navigate} />;
}
