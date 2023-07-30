import { create } from "zustand";

interface Todo {
    id: string,
    completed: boolean,
    content: string,
}

interface Store {
    todos: Todo[],
    length: number,
    addTodo: (newTodo: Todo) => void,
    markCompleted: (id: string) => void;
    deleteTodo: (id: string) => void,
    clearAllCompleted: () => void
}

const store = create<Store>((set, get) => ({
    todos: [],
    length: 0,
    addTodo: (newTodo) => set({}),
    markCompleted: (todoId) => set({}),
    deleteTodo: (todoId) => set({}),
    clearAllCompleted: () => set({})
}))

export default store;
