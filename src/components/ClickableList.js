import React, { useState } from "react";
import { List, ListItem, ListItemText, Checkbox, Button, Divider } from "@mui/material";
import { useAuth } from "../components/AuthContext.tsx";
import "../styles/index.css";

const ClickableList = ({ items, onSave }) => {
  const [checkedItems, setCheckedItems] = useState(
    items.map((item) => item.isDone)
  );

  const handleToggle = (index) => {
    const updatedChecked = [...checkedItems];
    updatedChecked[index] = !updatedChecked[index];
    setCheckedItems(updatedChecked);
  };

  const handleSave = () => {
    const updatedList = items.map((item, index) => ({
      ...item,
      isDone: checkedItems[index],
    }));
    onSave(updatedList);
  };

  return (
    <div>
      <List>
        {items.map((item, index) => (
          <><ListItem
            key={index}
            button
            onClick={() => handleToggle(index)}
            secondaryAction={<Checkbox
              edge="end"
              checked={checkedItems[index]}
              onChange={() => handleToggle(index)} />}
          >
            <ListItemText
              primary={item.title}
              secondary={item.description} />
          </ListItem>
          <Divider />
          </>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default function TodoApp() {
  const { user, setUser } = useAuth();

  const handleSaveTodoList = (updatedTodoList) => {
    const updatedUser = {
      ...user,
      method: {
        ...user.method,
        todoList: updatedTodoList,
      },
    };

    setUser(updatedUser);

    fetch(`https://localhost:7214/api/users/${user.id}/methodology`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser.method),
    }).catch((error) => console.error("Failed to save updates:", error));
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      {user.method.todoList && (
        <ClickableList
          items={user.method.todoList}
          onSave={handleSaveTodoList}
        />
      )}
    </div>
  );
}
