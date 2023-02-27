import React, { Component } from "react";
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { Link, useNavigate } from "react-router-dom";
import "./reportStyling.css";

class AllItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    const { navigate } = props;
    this.navigate = navigate;
  }

  componentDidMount() {
    getAllFoodItems().then((res) => {
      this.setState({
        items: res,
      });
    });
  }

  deleteItem() {}

  editItem() {}

  render() {
    return (
      <div className="">
        <h2 className="text-lg font-bold m-2 text-center">All Items List</h2>
        <Link
          to="/createItem"
          className="rounded-md bg-green-600 text-white p-1 mx-auto my-2"
        >
          Add Item
        </Link>
        <div className="my-5">
          <table className="table-fixed m-auto">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Calories</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.calories}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td className="w-fit">
                    <button
                      className="py-2 m-1 bg-blue-500 text-white"
                      onClick={() => this.editItem(item.id)}
                    >
                      Update
                    </button>
                    <button
                      className="py-2 m-1 bg-red-500 text-white"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
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

  return <AllItems {...props} navigate={navigate} />;
}
