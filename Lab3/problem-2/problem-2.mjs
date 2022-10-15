import fetch from "node-fetch";

//FUNCTION: which returns true if the post title is > 6
function countTitleWords(title) {

  const posts = title.split(' ');

  return posts.filter(word => word !== '').length > 6;

}

let request = fetch('https://jsonplaceholder.typicode.com/posts/');
  request.then(response => response.json())
  .then(posts => console.log(posts.filter(posts => countTitleWords(posts.title)).map(posts => posts.title)));

