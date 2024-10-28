import { useRef, useState } from "react";
import { ITodo } from "./types/todo";
import Todos from "./components/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      const newTodo: ITodo = {
        id: Math.max(...todo.map((item) => item.id)) + 1,
        desc: inputRef.current.value,
        isDone: false
      }
      setTodo((t) => [...t, newTodo])
      inputRef.current.value = ''
    }
  }

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-[60px] font-bold text-teal-500">
        To<span className="text-orange-400">Do</span> List
      </h1>
      <Todos todos={todo} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          className="w-full border border-teal-500 rounded-md p-2"
          type="text"
          placeholder="add todo here"
        />
        <button onClick={handleAdd} className="bg-teal-500 p-2 rounded-md">Add</button>
      </div>
    </div>
  );
}

export default App;
