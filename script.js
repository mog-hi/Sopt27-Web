const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const main = document.getElementById("form");
const main = document.getElementById("input");

const getUser = async (username) => {
    const response = await fetch("https://api.github.com/users/" + username);
    const responseData =await response.json()
    console.log(responseData);
}

getUser("Hyun-juhee");