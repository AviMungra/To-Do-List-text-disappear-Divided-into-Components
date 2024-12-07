import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(inputText) {
    setListItems((preValues) => {
      return [...preValues, inputText];
    });
  }

  function deleteItem(id) {
    setListItems((preArray) => {
      return preArray.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea callAddItem={addItem} />
      </div>
      <div>
        <ul>
          {listItems.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={toDoItem}
                isChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
