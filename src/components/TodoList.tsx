import React from 'react';
import { Todo } from '../todosContext'

type TodoProps = {
    todos: Todo [];
    onDelete(id:number):void;
    onToggle(id:number):void;
}
const TodoList = ( {todos, onDelete, onToggle} : TodoProps ) => {
    return (
        <div>
            <ul>
                {todos.map(todo=> <li key={todo.id} className={todo.isDone? "active": ""}><span onClick={()=>onToggle(todo.id)}>{todo.text}</span><button onClick={()=>onDelete(todo.id)}>삭제</button></li>)}
                {/* key 안줘서 나는 오류 key={todo.id} 추가하기 */}
            </ul>
        </div>
    );
};

export default TodoList;