//dummy data
let todo = [
  { id: "1", value: "1 todo" },
  { id: "2", value: "2 todo" },
  { id: "3", value: "3 todo" }
];
// var fs = require("fs");

// const readDataFromFile = new Promise(function(resolve, reject) {
//   fs.readFile("todoData.txt", "utf8", function(err, data) {
//     if (!err) {
//       resolve(JSON.parse(data));
//     } else {
//       reject("file err");
//     }
//   });
// });

// const writeDataToFile = fileData => {
//   return new Promise(function(resolve, reject) {
//     fs.writeFile("todoData.txt", JSON.stringify(fileData), function(err) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve("file updated");
//       }
//     });
//   });
// };

// writeDataToFile(todo).then((res)=>{
// console.log('res',res)
// })

// readDataFromFile
//   .then(data => {
//     console.log("data", data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

module.exports = {
  resolvers: {
    Query: {
      todos: () => todo
    },
    Todos: {
      id: parent => parent.id,
      value: parent => parent.value
    },
    Mutation: {
      add: (parent, args) => {
        let newTodo = {
          id: todo.length + 1,
          value: args.value
        };
        todo.push(newTodo);
        return newTodo;
      },
      delete: (parent, args) => {
        let deleteItemIndex = todo.findIndex(x => x.id == args.id);

        if (deleteItemIndex !== -1) {
          let deletedTodo = todo[deleteItemIndex];
          todo.splice(deleteItemIndex, 1);
          return deletedTodo;
        }
      },
      update: (parent, args) => {
        let updateItemIndex = todo.findIndex(x => x.id == args.id);

        if (updateItemIndex !== -1) {
          let updatedTodo = todo[updateItemIndex];
          updatedTodo.value = args.value;
          return updatedTodo;
        }
      }
    }
  }
};
