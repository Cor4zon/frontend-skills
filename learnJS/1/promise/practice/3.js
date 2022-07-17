const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

fetchData()
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(error));
