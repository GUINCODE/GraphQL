

export const User={
    todos : (parent, args, context, info)=> {
           const { db } = context;
            const { id } = parent;
        return db.todos.filter((todo) => todo.userId === id);}
}