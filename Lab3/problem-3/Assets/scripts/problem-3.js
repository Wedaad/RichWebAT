console.log("Javascript loaded");

//FUNCTION: TO SEARCH GITHUB API FOR USERNAME THAT IS ENTERED
function searchUser() {
    
    const search_input = document.getElementById("search-query");

    console.log("INSIDE SEARCH USER");
    let username = document.getElementById('search-query').value;
    console.log("USERNAME: " + username);

    // if(!username) {

        // TO-DO: ADD VALIDATION
    // }

    search_input.value = ""; //resetting input field to be empty once search
    
    let request = fetch(`https://api.github.com/users/${username}`);

    request.then(response => {

        console.log(response.json());

        //if the request has a status code of 200 - 299
        if(response.ok) {

            displayUserProfile(username);
            displayUserRepos(username);

        }

    }).catch(function (err) {

        console.log("ERROR: USER NOT FOUND." + err);
    });

}

// FUNCTION: TO DISPLAY USER INFORMATION
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
        name.insertAdjacentText('beforeend', user_data.name);
        git_username.insertAdjacentText('beforeend', user_data.login);
        location.insertAdjacentText('beforeend', user_data.location);
        num_gists.insertAdjacentText('beforeend', user_data.public_gists);

    })

}

//FUNCTION: TO DISPLAY USER REPO INFORMATION
function displayUserRepos(username) {

    console.log("INSIDE DISPLAY USER REPOS USERNAME: " + username);
    let repo_name = document.getElementById('repo-name');
    let repo_desc = document.getElementById('repo-desc');
    let repo_conatiner = document.getElementById('repo');
    
    let request = fetch(`https://api.github.com/users/${username}/repos`);

    request.then(response => response.json())
    .then(repos => {

        // if there are more than 5 repos make the scroll bar visible
        if(repos.length > 5) {

            let user_repo_container = document.getElementById('repo-container');
            user_repo_container.className = "div-scrollbar";
        }

        for(let i = 0; i < repos.length; i++) {

            let next_repo_name = document.createElement("div");
            let next_repo_desc = document.createElement("div");

            next_repo_name.innerHTML = "Name: ";
            next_repo_desc.innerHTML = "Description: ";
            next_repo_name.className = "repo-name-style";
            next_repo_desc.className = "repo-desc-style";
            next_repo_name.insertAdjacentText('beforeend', repos[i].name);
            next_repo_desc.insertAdjacentText('beforeend', repos[i].description);

            // if there is no repo description
            if(!repos[i].description) {

                next_repo_desc.insertAdjacentText('beforeend', '');
            }

            repo_conatiner.appendChild(next_repo_name);
            repo_conatiner.appendChild(next_repo_desc);
        }



    })


}