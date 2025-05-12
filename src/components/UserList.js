import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://be-278240587659.us-central1.run.app/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://be-278240587659.us-central1.run.app/delete-users/${id}`);
    getUsers();
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to="/add" className="button is-primary mb-3">Tambah Catatan</Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Note</th>
              <th>Pembuat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.Judul}</td>
                <td>{user.Note}</td>
                <td>{user.Pembuat}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger ml-2"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
