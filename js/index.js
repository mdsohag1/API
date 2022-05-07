

// data sent korthe hole JSON.stringify()
// data received korthe hole JSON.parse()


// const user = {id: 124, name: "abbas", friends:["ali", "sohag", "salam"], friendsAge:[12,45,78]}
// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// const userFromJSON = JSON.parse(userJSON)
// console.log(userFromJSON)



fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));