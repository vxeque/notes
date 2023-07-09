import React from "react";
import { useNavigate } from "react-router-dom";

export function NoteCard({ notes }) {
  const navigate = useNavigate();
    return (
    <div
      className="bg-zinc-800 rounded-md"
      onClick={() => {
        navigate(`/notes/${notes.id}`);
      }}
    >
      <h1 className="bg-blue-200 uppercase p-1">{notes.title}</h1>
      <p className="p-1">{notes.description}</p>
    </div>
  );
}
