import React, { Component } from "react";
import { getAllUsers } from "../utils/firebaseFunctions";
import { useNavigate } from "react-router-dom";
import "./reportStyling.css";

class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    const { navigate } = props;
    this.navigate = navigate;
  }

  componentDidMount() {
    getAllUsers().then((res) => {
      this.setState({
        users: res,
      });
    });
  }

  deleteUser() {}

  editUser() {}

  render() {
    return (
      <div className="">
        <h2 className="text-lg font-bold m-2 text-center">All Users List</h2>
        <div className="my-5">
          <table className="table-fixed m-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.userType}</td>
                  <td className="w-fit">
                    <button
                      className="py-2 m-1 bg-blue-500 text-white"
                      onClick={() => this.editUser(user.id)}
                    >
                      Update
                    </button>
                    <button
                      className="py-2 m-1 bg-red-500 text-white"
                      onClick={() => this.deleteUser(user.id)}
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

  return <AllUsers {...props} navigate={navigate} />;
}
