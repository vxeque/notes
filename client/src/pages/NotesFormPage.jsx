import { useForm } from "react-hook-form";
import { createNote, deleteNote, updateNote, getNotes } from "../api/notes.api";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function NotesFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateNote(params.id, data);
      toast.success("Note ");
    } else {
      await createNote(data);
      toast("Note created", {
        icon: "👏",
        style: {
          borderRadius: "100px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/notes");
    }
  });

  useEffect(() => {
    async function loadNotes() {
      if (params.id) {
        const res = await getNotes(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteNote(params.id);
              navigate("/notes");
            }
          }}
          className="bg-rose-700 p-3 rounded-lg block w-full mt-3"
        >
          Delete
        </button>
      )}
    </div>
  );
}
