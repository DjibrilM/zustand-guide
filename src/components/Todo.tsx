import { BsTrash3 } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import { useState } from 'react';


const Todo = () => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <li className=' w-full my-2  border flex gap-3 items-center bg-slate-50 p-5 rounded-md'>
            {
                editMode ?
                    <div className="w-full border ">
                        <form action="">
                            <input type="text" defaultValue="" className=' bg-transparent text-slate-500 h-10 w-full outline-none p-2' />
                        </form>
                    </div>

                    : <div className=" w-full">
                        <p className=' text-slate-600'> "" </p>
                    </div>
            }


            <div className=" flex gap-7">
                <button className=' p-3 rounded-full box-border bg-slate-200 hover:bg-slate-300 hover:text-slate-700'>
                    <BsTrash3 className=" cursor-pointer" />
                </button>

                <button onClick={() => setEditMode(!editMode)} className=' p-3  rounded-full box-border bg-slate-200 hover:bg-slate-300 hover:text-slate-700'>
                    <MdModeEditOutline className=" text-slate-500" />
                </button>
            </div>
        </li>
    )
}

export default Todo