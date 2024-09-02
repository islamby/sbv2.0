import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  const addTask = () => {
    if (value.trim()) {
      setTasks([...tasks, { text: value, important: false }]);
      setValue('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const markImportant = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, important: !task.important } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Список задач</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.important ? 'important' : ''}>
            {task.text}
            <button onClick={() => markImportant(index)}>!</button>
            <button onClick={() => deleteTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
