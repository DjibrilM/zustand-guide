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


const useTodoStore = create<Store>((set, get) => ({
    todos: [],
    length: 0,
    addTodo: (newTodo) => set({ todos: [...get().todos, newTodo], length: get().todos.length }),
    markCompleted: (todoId) => {
        const getTodos = get().todos  // get the list of all todos avalaible in the store

        const todoIndex = getTodos.findIndex((todo) => todo.id === todoId);  //find todo index

        getTodos[todoIndex].completed = !getTodos[todoIndex];  //update the complete property by its oposite.

        set({ todos: [...getTodos], length: get().todos.length });  //update the list all todos in the store with the new changes.

    },

    deleteTodo: (todoId) => set({ todos: get().todos.filter((todo) => todo.id !== todoId) }),  //delete the targeted todo.

    clearAllCompleted: () => set({ todos: [] })

}))

export default useTodoStore;