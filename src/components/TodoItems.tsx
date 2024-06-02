interface TodoItemsProps {
    todoItems: string[];
}

const TodoItems: React.FC<TodoItemsProps> = ({todoItems}) => {
    return <>
    <ul className="list-group list-group-flush">
        {
        todoItems.map((todoItem, index) => (
            <li key={index} className="list-group-item">{todoItem}</li>
        ))
        }
    </ul>
    </>;
}

export default TodoItems;