const API_URL = "https://api.github.com/users/";
// elment들을 가져옴 
const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

// from이 submit 되면 아래 내용 실행 
form.addEventListener("submit", (event)=>{
    event.preventDefault(); // 기본으로 정의된 이벤트 발생하지 않게 (refresh 안되게)
    const user = input.value; // input에서 입력받은 값 (.value로 접근)
    if (user) {
        getUser(user);
        input.value = "";
    }
});
const getUser = async (username) => {
    // api 에서 값 받아오기 fetch! (비동기함수 -> await 사용)
    const response = await fetch(API_URL + username);
    const responseData = await response.json();
    createUserCard(responseData);
    getRepos(username);
};

// main 엘리먼트에 cardHTML 추가 
const createUserCard = (user) => {
    const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
    main.innerHTML = cardHTML;
    // main 태그 사이에 위치
};

const getRepos = async (username) => {
    const reponse = await fetch(API_URL + username + "/repos");
    const responseData = await reponse.json();
    addReposToCard(responseData);
}
const addReposToCard = (repos) => {
    const reposElement = document.getElementById("repos");
    // <a class="repo" href={~~} target="_blank">{repo.name}</a>
    repos.slice(0,10).forEach((repo) => {
        const element = document.createElement("a");
        element.classList.add("repo") // class = "rapo"
        element.href = repo.html_url;
        element.target = "_blank";
        element.innerText = repo.name;
        
        reposElement.appendChild(element);
    });
};
