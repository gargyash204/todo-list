import { useState } from 'react'

interface TodoInputProps {
    inputFieldStatus: boolean;
    addToList: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({inputFieldStatus, addToList}) => {
    const [todoListName, setTodoListName] = useState('');

    const setInput = (value: string) => {
        setTodoListName(value);
    }

    const handleAddToTodoList = () => {
        addToList(todoListName);
        setTodoListName('');
    }

    return <>
        <div className={inputFieldStatus ? "input-group m-2" : "input-group m-2 d-none"} style={{width: '97%'}}>
          <input type="text" className="form-control" placeholder="Add to todo list" aria-label="Add to todo list" aria-describedby="button-addon2"
           value={todoListName} onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => handleAddToTodoList()}>Add</button>
        </div>
    </>;
}

export default TodoInput;