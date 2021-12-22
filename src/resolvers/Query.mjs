

export const Query = {
  // ici on implemente l'enseble des operation de manipulation des datas
  hello: (_, { name }) => `Hello ${name || "World"}`,
  getTodos: (parents, ars, context, info) => {
    const { db } = context;
    return db.todos;
  },

  getTodoById: (parents, { id }, context, info) => {
    const { db } = context;
    let todo = db.todos.find((todo) => todo.id == id);
    // if (typeof todo === "undefined") {
    if (!todo) {
      console.log("aucun todo trouvé");
      // throw new Error("le todo de id n'existe pas")
      return null;
    } else return todo;
  },

  getUsers: (parents, ars, context, info) => {
    const { db } = context;
    return db.users;
  },

  getUserById: (parents, { id }, context, info) => {
       const { db } = context;
    let user = db.users.find((user) => user.id == id);
    // if (typeof todo === "undefined") {
    if (!user) {
      console.log("aucun user trouvé");
      // throw new Error("le todo de id n'existe pas")
      return null;
    } else return user;
  },
};