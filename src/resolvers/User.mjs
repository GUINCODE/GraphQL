import { db } from "../db/db.mjs"

export const User={
    todos : (parent, args, context, info)=> {
            const { id } = parent;
        return db.todos.filter((todo) => todo.id === id);}
}