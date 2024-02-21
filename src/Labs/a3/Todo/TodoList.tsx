import TodoItem from "./TodoItem";
import Todos from "./Todos.json";
const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {Todos.map(todo => {
                    return (<TodoItem todo={todo} />);
                })}
            </ul>
        </>
    );
}
export default TodoList;