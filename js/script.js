window.addEventListener('load', () => {
  doMap();
});

function doMap() {
  const mappedUsers = people.results.map((user) => {
    return {
      name: user.name.first,
      surname: user.name.last,
      age: user.dob.age,
      picture: user.picture,
      gender: user.gender,
    };
  });
  console.log(mappedUsers);
}

doFilterName = (name) => {
  const filteredUsers = people.results.filter((user) => {
    return user.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
  });
  return filteredUsers;
};
console.log(doFilterName('e'));

// //CHAMANDO A API COM ASYNC AWAIT
// async function fetchUsers() {
//   const res = await fetch(
//     'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
//   );

//   const json = await res.json();

//   allUsers = json.results.map((user) => {
//     const { name, dob, picture, gender } = user;

//     return {
//       name: name.first,
//       surname: name.last,
//       age: dob.age,
//       picture: picture,
//       gender: gender,
//     };
//   });
// }

// doFilterName = (name) => {
//   const filteredUsers = allUsers.filter((user) => {
//     return user.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
//   });
//   return filteredUsers;
// };
// console.log(doFilterName('e'));
