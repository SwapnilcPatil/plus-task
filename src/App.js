import { useState } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (input !== '') {
      setTodo([...todo, input]);
      setInput('');
    }
  };

  const onRemove = (index) => {
    const newTodo = [...todo.slice(0, index), ...todo.slice(index + 1)];
    setTodo(newTodo);
  };

  return (
    <div className='component-container'>
      <div className='container'>
        <div>
          <Form input={input} setInput={setInput} addTodo={addTodo} />
          <List todo={todo} onRemove={onRemove} />
        </div>
      </div>
    </div>
  );
}

export default App;
