//Q1
function sumAsync(a, b, callback) {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 1000);
  }
  
  sumAsync(3, 7, (result) => {
    console.log(result); // Output: 10
  });
  //Q2
  function getData() {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve("Data fetched successfully.");
    }, 2000);
    });
    }
    getData().then((result) => {
    console.log(result); // Output: Data fetched successfully.
    });
    //Q3
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      }
      fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
        console.log(data);
        // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
      });
      //Q4
      async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      }
      
      fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
        console.log(data);
      });
      // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

      //Q5
      function multiplyWithCallback(numbers, callback) {
        const multipliedArray = numbers.map((num) => num * 2);
        callback(multipliedArray);
      }
      const inputArray = [1, 2, 3, 4];
      multiplyWithCallback(inputArray, (result) => {
        console.log(result); // Output: [2, 4, 6, 8]
      });

      //Q6
      function fetchUserDataAndPosts (userId) {
        return
        fetch('https://jsonplaceholder.typicode.com/users/${userId}')
        .then((response) => response.json())
        .then((userData) => {
        return fetch(
        )
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        .then((response) => response.json())
        .then((posts) => ({ user: userData, posts }));
        });
        }
        fetchUserDataAndPosts(1).then((result) => {
        });
        console.log(result); // Output: { user: {...}, posts: [...]}

        //Q7
        function fetchMultipleData(urls) {
            const promises = urls.map((url) =>
              fetch(url).then((response) => response.json())
            );
          
          return Promise.all(promises);
}
const urlsToFetch = [
"https://jsonplaceholder.typicode.com/todos/1",
"https://jsonplaceholder.typicode.com/todos/2",
"https://jsonplaceholder.typicode.com/todos/3",
];
fetchMultipleData(urlsToFetch).then((responses) => {
console.log(responses); // Array of responses from each URL
});

//Q8
JavaScript
function racePromises (promises) {
return Promise.race(promises);
}
const promise1 = new Promise((resolve) =>
setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_, reject) =>
setTimeout(() => reject("Promise 2 rejected"), 500)
);
racePromises ([promise1, promise2])
.then((result) => {
console.log(result);
})
.catch((error) => {
console.error(error);
});