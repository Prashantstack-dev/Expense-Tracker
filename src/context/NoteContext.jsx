import { createContext, useState, useContext, useEffect } from 'react';
import supabase from "../utils/supabaseClient";
import { useAuth } from "@clerk/clerk-react"

const NoteContext = createContext();  //create a context


export function NoteProvider({children}){
   //create a note
   const[notes, setNotes] = useState([]);
   
//Call useAuth() and destructure userId from returned object
  const {userId} = useAuth(); 

   async function fetchNotes() {
    //Early return if no userId
    if(!userId) return;

//Destructure data and error from supabase, select from Notes table, filter by userId
const {data,error} = await supabase
.from('Notes')
.select('*')
.eq('user_id', userId)
//Handle error
if(error){
  console.log('error fetching data...', error)
}else{
  console.log('Data:', data);
  //Call setNotes(data)
  setNotes(data);
}
   }

   useEffect(() => {
       fetchNotes();
     
   }, [userId])

   async function addNotes(note){
  const {data, error} = await supabase 
    .from('Notes')
    .insert({...note, user_id: userId})
     if(error){
        console.error("Error fetching data:", error)
      } else {
        console.log("Data:", data)
        fetchNotes();
      }
   }

   async function deleteNotes(noteId){
    const {data, error} = await supabase 
    .from('Notes')
    .delete()
    .eq('id', noteId);
      if(error){
        console.error("Error fetching data:", error)
      } else {
        console.log("Data:", data)
        fetchNotes();
      }
   }
   

    return ( 
        // pin both the data and function to the board 
        <NoteContext.Provider value={{ notes, addNotes, deleteNotes }}>
     {/* mount notice board to wall and pin data as children */}
              {children}
        </NoteContext.Provider>
    )
}

export function useNotes(){
 return useContext(NoteContext);
}