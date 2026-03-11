import {useNotes} from "../context/NoteContext";

const NoteList = () => {
    const {notes, deleteNotes} = useNotes();
    
   

  return (
    <ul className="flex flex-row justify-between items-center bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border">
     {notes.map((items,indx) => (
        <li className="space-y-5"  key={indx}> <h1 className="font-bold text-slate-800 text-shadow-lg">{items.title}</h1>
        
        <button className="text-red-500 font-bold text-xs hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer" onClick={() => deleteNotes(items.id)}>Delete</button>
        </li>
     )) } 
    </ul>
  )
}

export default NoteList
