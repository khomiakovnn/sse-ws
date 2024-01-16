export default class Userbox {
    constructor () {
        this.userContainer = document.querySelector('.user-container');
    }

    displayUsers (usersList) {
        this.userContainer.innerHTML = ''
        for (let index = 0; index < usersList.length; index++) {
            const userCard = this._createUserCard(usersList[index]);
            this.userContainer.appendChild(userCard)
        }
    }

    _createUserCard (user) {
        const userCard = document.createElement('div');
        userCard.className = "user-card";
        userCard.id = user;
        const markdown = `<div class="user-avatar"></div><div class="user-name">${user}</div>`
        userCard.innerHTML = markdown;
        return userCard;
    }
}