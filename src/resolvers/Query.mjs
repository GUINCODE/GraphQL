 
const todos = [
  {
    id: 1,
    name: "Todo 1",
    content: "Apprendre les schema",
    status: 'SUCCEFULL',
  },
  {
    id: 2,
    name: "Todo II",
    content: "Apprendre les Query",
    status: 'PROGRESS',
  },
  {
    id: 2,
    name: "Todo III",
    content: "Apprendre les Resolvers",
    status: 'WAITING',
  },
];

export const Query={
    // ici on implemente l'enseble des operation de manipulation des datas
    hello: (_, { name }) => `Hello ${name || "World"}`,
    getTodos: ()=>{ return todos}
}