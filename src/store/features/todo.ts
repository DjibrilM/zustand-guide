import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Todo {
    id: string,
    completed: boolean,
    content: string,
}


interface state {
    todos: Todo[],
    length: number,
}

interface Actions {
    addTodo: (newTodo: Todo) => void,
    markCompleted: (id: string) => void;
    deleteTodo: (id: string) => void,
    clearAllCompleted: () => void,
    updateTodo: (id: string, content: string) => void
}

const useTodoStore = create(persist<state & Actions>(
    (set, get) => ({
        todos: [],
        length: 0,
        addTodo: (newTodo) => set({ todos: [newTodo, ...get().todos,], length: get().todos.length }),
        markCompleted: (todoId) => {

            const getTodos = get().todos  // get the list of all todos avalaible in the store

            const todoIndex = getTodos.findIndex((todo) => todo.id === todoId);  //find todo index

            getTodos[todoIndex].completed = !getTodos[todoIndex].completed;  //update the complete property by its oposite.

            return set({ todos: [...getTodos], length: get().todos.length });  //update the list all todos in the store with the new changes.

        },

        deleteTodo: (todoId) => set({ todos: get().todos.filter((todo) => todo.id !== todoId) }),  //delete the targeted todo.

        clearAllCompleted: () => set({ todos: [] }),

        updateTodo: (id: string, content: string) => {
            const getTodos = get().todos; //get the list of all todos

            const todoIndex = getTodos.findIndex((td) => td.id === id); //get the targeted todo index

            getTodos[todoIndex].content = content;

            return set({ todos: [...getTodos] });
        }

    }),
    {
        name: 'food-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
))

export default useTodoStore;


