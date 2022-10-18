console.log("Javascript loaded");

function searchUser() {
    
    const search_input = document.getElementById("search-query");

    console.log("INSIDE SEARCH USER");
    let username = document.getElementById('search-query').value;
    console.log("USERNAME: " + username);

    search_input.value = ""; //resetting input field to be empty once search
    
    let request = fetch(`https://api.github.com/users/${username}`);

    request.then(response => {

        console.log(response.json());

        if(response.ok) {

            console.log("USER FOUND");
            displayUserProfile(username);
            displayUserRepos(username);

        } else {

            console.log("USER NOT FOUND");
        }


    })

}

// populate web application
function displayUserProfile(username) {

    let profile_picture = document.getElementById('profile-picture');
    let name = document.getElementById('name');
    let git_username = document.getElementById('username');
    let location = document.getElementById('location');
    let num_gists = document.getElementById('number-of-gists');
    
    let request = fetch(`https://api.github.com/users/${username}`);

    request.then(response => response.json()) 
    .then(user_data => {

        profile_picture.src = user_data.avatar_url;
        name.innerHTML += user_data.name;
        git_username.innerHTML += user_data.login;
        location.innerHTML += user_data.location;
        num_gists.innerHTML += user_data.public_gists;

    })

}

function displayUserRepos(username) {

    console.log("INSIDE DISPLAY USER REPOS");
    let repo_name = document.getElementById('repo-name');
    let repo_desc = document.getElementById('repo-desc');
    
    let request = fetch(`https://api.github.com/users/${username}/repos`);

    request.then(response => console.log(response.json()))
    .then(repos => {

            repo_name.innerHTML += repos.name;
            repo_desc.innerHTML += repos.description;
        // for(let i = 1; i < repos.length; i++) {

        //     let next_repo_name = document.createElement("div");
        //     let next_repo_desc = document.createElement("div");
        //     next_repo_name.className = "repo-name-style";
        //     next_repo_desc.className = "repo-desc-style"
        //     repo_name.innerHTML += repos.name;
        //     repo_desc.innerHTML += repos.description;

        // }

        // repos.array.forEach(repo => {
            
        //     repo_name.innerHTML += repo.name;
        //     repo_desc.innerHTML += repo.description;

        // });
    })


}