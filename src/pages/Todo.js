import React from "react";
import { useAuth } from "../components/AuthContext.tsx";
import ClickableList from "../components/ClickableList.js";
import "../styles/index.css";

function Method() {
    const { user } = useAuth();

    if (!user) {
        return <div> <br/>Error: User not loaded.</div>;
    }

    if (!user.method || !user.method.todoList || !user.method.todoList === 0) {
        return <div> <br/>No to-do items available.</div>;
    }

    return (
        <div className="todo">
            <ClickableList items={user.method.todoList}/>
        </div>
    );
}

export default Method;