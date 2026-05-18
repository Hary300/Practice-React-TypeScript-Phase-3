import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type Todo = {
  id: string;
  text: string;
};

export default function SimpleTodoList() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [input, setInput] = useState('');

  function handleClick() {
    if (!input) return;

    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text: input }]);
    setInput('');
  }

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Write todo...'
        className='px-4 py-2 rounded-2xl border'
      />
      <button
        onClick={handleClick}
        className='border rounded-2xl cursor-pointer p-2'
      >
        Add
      </button>
      {todos.length > 0 && (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
