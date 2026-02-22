//displays friends with delete button
import React from 'react'
import { useFriend } from './FriendContext';


const FriendList = () => {
    const{friendName, deleteFriend} = useFriend();
  return (
    <div>
      {friendName.map((item) => (
        <li key={item.id}>{item.name}
        <button type='button' onClick={() => deleteFriend(item.id)}>Delete</button></li>
      ))}
    </div>
  )
}

export default FriendList
