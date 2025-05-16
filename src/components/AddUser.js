import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [judul, setJudul] = useState("");
  const [note, setNote] = useState("");
  const [pembuat, setPembuat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get("https://be-278240587659.us-central1.run.app/catatan/users");
    const user = response.data.find((u) => u.id == id);
    if (user) {
      setJudul(user.Judul);
      setNote(user.Note);
      setPembuat(user.Pembuat);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    await axios.put(`https://be-278240587659.us-central1.run.app/catatan/edit-users/${id}`, {
      Judul: judul,
      Note: note,
      Pembuat: pembuat
    });
    navigate("/");
  };

  return (
    <div className="column is-half">
      <h1 className="title">Edit Catatan</h1>
      <form onSubmit={updateUser}>
        <div className="field">
          <label className="label">Judul</label>
          <input className="input" type="text" value={judul} onChange={(e) => setJudul(e.target.value)} required />
        </div>
        <div className="field">
          <label className="label">Note</label>
          <input className="input" type="text" value={note} onChange={(e) => setNote(e.target.value)} required />
        </div>
        <div className="field">
          <label className="label">Pembuat</label>
          <input className="input" type="text" value={pembuat} onChange={(e) => setPembuat(e.target.value)} required />
        </div>
        <button className="button is-primary" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
