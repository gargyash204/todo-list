import './App.css'
import { useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoItems from './components/TodoItems';
import TodoInput from './components/TodoInput';

function App() {
  const [todoItems, setTodoItems] = useState(['apple', 'orange']);
  const [inputFieldStatus, setInputFieldStatus] = useState(false);
  
  const toggleInputField = (status: boolean) => {
    setInputFieldStatus(status);
  };

  const addToTodoList = (value: string) => {
    setTodoItems([...todoItems, value]);
    setInputFieldStatus(false)
  };

  return (
    <>
      <div className="card" style={{width: '28rem', padding: '0'}}>
        <TodoHeader inputFieldShow={inputFieldStatus} showInputField={toggleInputField} />
        <TodoInput inputFieldStatus={inputFieldStatus} addToList={addToTodoList}></TodoInput>
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  )
}

export default App
