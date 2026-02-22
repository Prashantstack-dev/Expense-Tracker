//input and add friend
import React, { useState } from "react";
import {useFriend} from "../practice/FriendContext";

const FriendForm = () => {
  const [name, setName] = useState('');
  
  const {addFriend} = useFriend();

  function handleSubmit(e) {
    e.preventDefault();
    addFriend(name);

    //clear after submit
    setName('')
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>FriendForm</h1>
        <label>
          Name :
          <input type='text' value={name} onChange={handleChange} />
          <button type="button" onClick={() => addFriend(name)}>Add</button>
        </label>
        <p>Name Typed is : {name}</p>

      </form>
    </div>
  );
};

export default FriendForm;
