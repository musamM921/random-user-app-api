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
        <div class = "card-head">
                <a href = "#"><i class = "fas fa-envelope"></i> Email</a>
                <div class = "user-image">
                    <img src = "images/profile-img.jpg" alt = "">
                </div>
            </div>

            <div class = "card-body">
                <div class = "user-post-address">
                    <div>
                        <span>9545</span><span>Street Address</span>
                    </div>
                    <div>
                        <span>20054</span><span>Postcode</span>
                    </div>
                    <div>
                        <span>Esplanadi</span><span>Street Name</span>
                    </div>
                </div>

                <div class = "user-name">
                    <span class = "user-name-title">Mr.</span>
                    <span class = "user-name-full">Helen Anttila,</span>
                    <span class = "user-age">34</span>
                </div>

                <div class = "user-location-address">
                    <span>Kouvola, Satakunta, Finland</span>
                </div>
            </div>

            <div class = "card-foot">
                <div class = "user-contact-info">
                    <span>
                        <i class = "fas fa-phone"></i> 07-567-990
                    </span>
                    <span>
                        <i class = "fa-solid fa-mobile-button"></i> 044-391-36-63
                    </span>
                </div>
            </div>
        `
    }
}

document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchToAPI()
})

RandomUser.fetchToAPI()