import { useEffect, useState } from "react";
import { getAllNotes } from "../api/notes.api";
import { NoteCard } from "../components/NoteCard";

export function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const res = await getAllNotes();
      setNotes(res.data);
    }
    loadNotes();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {notes.map((notes) => (
        <NoteCard key={notes.id} notes={notes}></NoteCard>
      ))}
    </div>
  );
}