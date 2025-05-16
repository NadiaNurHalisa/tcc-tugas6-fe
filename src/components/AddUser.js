import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [judul, setJudul] = useState("");
  const [note, setNote] = useState("");
  const [pembuat, setPembuat] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    // Ganti URL localhost ke URL GCP
    await axios.post("https://tcc-tugas5-be-278240587659.us-central1.run.app/catatan/add-users", {

      Judul: judul,
      Note: note,
      Pembuat: pembuat
    });
    navigate("/");
  };

  return (
    <div className="column is-half">
      <h1 className="title">Tambah Catatan</h1>
      <form onSubmit={saveUser}>
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
        <button className="button is-primary" type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default AddUser;
