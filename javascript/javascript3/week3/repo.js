const repoUl = document.createElement('ul')
const repo_display = document.getElementById('repo_display')
const urlGohar = "https://api.github.com/search/repositories?q=user:Gohar33"
const urlHanieh = "https://api.github.com/search/repositories?q=user:Hani-far"
const urlSaide = "https://api.github.com/search/repositories?q=user:Saidemm"


async function getRepos() {
    let fetchGoharApi = fetch(urlGohar).then(response => response.json())
    let fetchHaniehApi = fetch(urlHanieh).then(response => response.json())
    let fetchSaideApi = fetch(urlSaide).then(response => response.json())

    const getRepoInfo = Promise.all([fetchGoharApi, fetchHaniehApi, fetchSaideApi]);
    getRepoInfo
        .then(repos => {
            repos.forEach(repo => {
                console.log(repo)
                const repoLi = document.createElement('li')
                repoLi.innerHTML = ` ${repo.items[0].owner.login}´s Reposotories`;
                repoUl.appendChild(repoLi);
                const repoDetailsUl = document.createElement('ul')
                repoLi.appendChild(repoDetailsUl)
                repoDetailsUl.innerHTML = `<li>${repo.items[0].html_url}</li> 
               <li>${repo.items[0].full_name}</li>
               <li>${repo.items[0].owner.avatar_url}</li>`

            })


            repo_display.appendChild(repoUl);
        })
        .catch(error => console.log(error))

}

getRepos();
