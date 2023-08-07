import { useState } from 'react'
import Todo from './components/Todo'
function App() {
  const [content, setContent] = useState<string>("");

  return (
    <main className=' w-full p-2 min-h-screen bg-slate-200 pt-10'>
      <div className=" bg-white border m-auto  max-w-4xl min-h-[300px] ">
        <div className="">
          <h3 className=' text-2xl font-bold p-5 border-b bg-slate-100 text-slate-600'>Simple Todo📝</h3>
        </div>

        <div className="w-full flex   gap-5 p-5">
          <input value={content} onChange={((e) => setContent(e.target.value))} placeholder=' Your todo' type="text" className='  px-4 w-full rounded-md border outline-slate-300' />
          <button className=' bg-slate-700 text-white px-10 py-4 active:bg-slate-800 rounded-md '>submit</button>
        </div>

        <ul className=' p-5'>
          <Todo />
        </ul>
      </div>
    </main>
  )
}

export default App
