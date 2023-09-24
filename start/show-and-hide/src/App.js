import "./App.css";
import React, { useState } from "react";

function App() {
  /*  The task is to conditionally show a warning box once a user has clicked a specific button. 
      Inside that warning dialog, another button allows users to dismiss the warning.
  */

  //First Test
  const [content, setContent] = useState(false);

  const onClickHandlerDelete = () => {
    setContent(true);
  };

  const onClickHandlerAlert = () => {
    setContent(false);
  };

  let theContent = (
    <p></p>
  );

  if (content === true) {
    theContent = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={onClickHandlerAlert}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {theContent}
      <button onClick={onClickHandlerDelete}>Delete</button>
    </div>
  );
}

export default App;
