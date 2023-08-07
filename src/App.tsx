import { useRef } from 'react'
import Todo from './components/Todo'
import useTodoStore from './store/features/todo'
import { Todo as TodoType } from './store/features/todo';


function App() {
  const addTodoAction = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const input = useRef<HTMLInputElement>();

  const addTodo = () => {
    if (!input.current?.value) return;

    const newTodo: TodoType = {
      content: input.current.value,
      completed: false,
      id: new Date().toISOString(),
    }
    addTodoAction(newTodo);
    input.current.value = "";
  }


  return (
    <main className=' w-full p-2 min-h-screen bg-slate-200 pt-10'>
      <div className=" bg-white border m-auto  max-w-4xl min-h-[300px] ">
        <div className="">
          <h3 className=' text-2xl font-bold p-5 border-b bg-slate-100 text-slate-600'>Simple Todo📝</h3>
        </div>

        <div className="w-full flex   gap-5 p-5">
          <input ref={(el: HTMLInputElement) => input.current = el} placeholder=' Your todo' type="text" className='  px-4 w-full rounded-md border outline-slate-300' />
          <button onClick={() => addTodo()} className=' bg-slate-700 text-white px-10 py-4 active:bg-slate-800 rounded-md '>submit</button>
        </div>

        <ul className=' p-5'>
          {todos.map((td) => <Todo content={td.content} completed={td.completed} id={td.id} key={td.id} />)}
        </ul>
      </div>
    </main>
  )
}

export default App
