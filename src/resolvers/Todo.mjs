import { db } from "../db/db.mjs";

export const Todo = {
  user: (parents, ars, conext, info) => {
    const { id } = parents;
    return db.users.find((user) => user.id === id);
    // console.log("Parent: ", parents);
  },
};