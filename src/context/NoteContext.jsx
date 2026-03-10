import { createContext, useState, useContext } from 'react';
import supabase from "../utils/supabaseClient";
import { useAuth } from "@clerk/clerk-react"

const NoteContext = createContext();  //create a context

export function NoteProvider({children}){
   //create a note
   const[notes, setNotes] = useState([]);
   
   function addNote(note){
     setNotes([...notes, note ]) // contains prev note and latest note
     console.log(addNote);
   }
   
   function deleteNote(id){
    const updateItems = notes.filter(note => note.id !== id);
    setNotes(updateItems);
   }
   

   async function getExpenses() {
    const { data } = await supabase
  .from('Notes')
  .select()
  

   }
//Call useAuth() and destructure userId from returned object
  const {userId} = useAuth();


    return ( 
        // pin both the data and function to the board 
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
     {/* mount notice board to wall and pin data as children */}
              {children}
        </NoteContext.Provider>
    )
}

export function useNotes(){
 return useContext(NoteContext);
}