
export const Todo = {
  user: (parents, ars, context, info) => {
    const { db } = context;
    const { userId } = parents;
   console.log("Parent: ", parents);
    return db.users.find((user) => user.id === userId);
   
  },
};