import { BsTrash3 } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import React, { FormEvent, useState, } from 'react';
import useTodoStore from '../store/features/todo';


interface Props {
    content: string,
    completed: boolean,
    id: string
}

const Todo: React.FC<Props> = ({ content, completed, id }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [updateValue, setUpdateValue,] = useState<string>(content);


    //actions from useTodoStore
    const { deleteTodo, updateTodo, markCompleted } = useTodoStore((state) => state);


    //function for updating a todo
    const editTodFunction = (e: FormEvent) => {
        e.preventDefault();
        if (updateValue.trim().length < 1) return //check if the input is empty

        updateTodo(id, updateValue);
        setEditMode(false);
    }


    return (
        <li className=' w-full my-2 cursor-pointer  border flex gap-3 items-center bg-slate-50 p-5 rounded-md'>
            {
                editMode ?
                    <div className="w-full border ">
                        <form onSubmit={editTodFunction} action="">
                            <input autoFocus onChange={(e) => setUpdateValue(e.target.value)} type="text" defaultValue={content} className=' bg-transparent text-slate-500 h-10 w-full outline-none p-2' />
                        </form>
                    </div>

                    : <div className=" w-full">
                        <p style={completed ? { textDecoration: "line-through" } : {}} className=' text-slate-600'> {content} </p>
                    </div>
            }


            <div className=" flex gap-7">
                <button onClick={() => deleteTodo(id)} className=' p-3  rounded-full box-border w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-slate-300 hover:text-slate-700'>
                    <BsTrash3 className=" cursor-pointer" />
                </button>

                <button onClick={() => setEditMode(!editMode)} className=' p-3  rounded-full box-border w-12 h-12 flex items-center justify-center bg-slate-200 hover:bg-slate-300 hover:text-slate-700'>
                    <MdModeEditOutline className=" text-slate-500" />
                </button>

                <button onClick={() => markCompleted(id)} className=' p-3  rounded-md box-border bg-slate-200 text-sm hover:bg-slate-300 hover:text-slate-700'>
                    Completed
                </button>
            </div>
        </li>
    )
}


export default Todo