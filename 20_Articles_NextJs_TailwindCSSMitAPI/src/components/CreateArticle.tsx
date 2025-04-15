"use client";

import { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateArticle = () => {
    fetch("http://localhost:3001/articles", {
      method: "post",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title: title,
        description: description
      })
    });
  };

  return (
    <div className="bg-slate-300 text-gray-700 py-24 flex flex-col px-8 gap-7">
      <label className="font-bold">title :</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="bg-amber-100 rounded"
      />

      <label className="font-bold">description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        className="bg-amber-100 rounded"
      ></textarea>
      <button onClick={handleCreateArticle} className="bg-amber-100 w-20 font-bold rounded">Submit</button>
    </div>
  );
}

export default CreateArticle;
