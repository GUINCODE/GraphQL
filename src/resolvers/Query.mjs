 import { db } from "../db/db.mjs"

export const Query = {
  // ici on implemente l'enseble des operation de manipulation des datas
  hello: (_, { name }) => `Hello ${name || "World"}`,
  getTodos: (parents, ars, conext, info) => {
    return db.todos;
  },

  getTodoById: (parents, { id }, conext, info) => {
   
    let todo = db.todos.find((todo) => todo.id == id);
    // if (typeof todo === "undefined") {
    if (!todo) {
       console.log("aucun todo trouvé");
      // throw new Error("le todo de id n'existe pas")
       return null;
    } else  return todo;
  },

  
};