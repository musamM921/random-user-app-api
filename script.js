class RandomUser {
    constructor(){}

    static fetchToAPI() {
        let URL = 'https://randomuser.me/api/'
        fetch(URL)
        .then (response => response.json())
        .then (data => RandomUser.randomUserFind(data))
        .catch(error => alert(error))
    }
    static randomUserFind(data) {
        // console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        `
    }
}

document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchToAPI()
})

RandomUser.fetchToAPI()