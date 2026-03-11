//NoteForm is UI component

import { useNotes } from "../context/NoteContext.jsx";
import { useState } from "react";



const NoteForm = ({expenseId}) => {
  const [noteForm, setNoteForm] = useState({
    title: "",
    tag: ""
  });

  const { addNotes } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending the context to the form through custom hooks
    console.log(noteForm)
    addNotes({ ...noteForm, id: Date.now(), expense_id:expenseId });

    setNoteForm({
      title: "",
      tag: "",
      
    });
  };

  function handleChange(e) {
    return setNoteForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }


  return (
    <div>
      <input
        type='text'
        name='title'
        value={noteForm.title}
        onChange={handleChange}
        className='border-2 border-black p-2'
      ></input>
      <select name='tag' value={noteForm.tag} onChange={handleChange}>
            <option>Choose tag: </option>
            <option >Personal</option>
            <option>Business</option>
        </select>
      <button
        className='border-2 border-black p-2 gap-x-5'
        onClick={handleSubmit}
      >
        
        Submit
      </button>
    </div>
  );
};

export default NoteForm;
