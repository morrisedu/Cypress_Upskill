const { Callbacks } = require("cypress/types/jquery");

const posts = [
    {title: "Post One", body: "This is post one."},
    {title: "Post Two ", body: "This is post two."}
]

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `$(post.title)`;
        });
        console.log("Post: ", output + " ");
    }, 1000)
}

function createPost(post, Callbacks) {
    setTimeout(() => {
        posts.push(post);
        Callbacks;
    }, 2000)
}

getPosts();