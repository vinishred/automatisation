//fichier users.js
function getAllUsers() {
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Mary",
      age: 25,
    },
    {
      id: 3,
      name: "Bob",
      age: 30,
    },
  ];

  return users;
}

module.exports = { getAllUsers };
