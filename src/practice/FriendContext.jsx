//notice board 
import React, {createContext,useState, useContext} from "react";


//create context
export const FriendContext = createContext('');
//custom hook to useContext
export const useFriend = ()=> useContext(FriendContext);

export function FriendProvider({children}){
const [ friendName, setFriendName] = useState([]); //display the name


function addFriend(name){
   setFriendName([...friendName, {name, id: Date.now()}])
}


function deleteFriend(id){
   const filtered = friendName.filter((item)=> item.id !== id)
   setFriendName(filtered);
}
return(
<FriendContext.Provider value={{friendName,addFriend, deleteFriend}}>
       {children}
</FriendContext.Provider>
)
}