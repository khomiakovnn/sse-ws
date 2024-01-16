export default class Chatbox {
    constructor (socket) {
        this.socket = socket;
        this.user = '';
        this.container = document.querySelector('.messages-container');
        this.inputElem = document.querySelector('.message-input');
        this.inputElem.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && this.inputElem.value !== '') {
                this._sendMessage(this.inputElem.value);
                this.inputElem.value = '';
            }
          });
    }

    _sendMessage (text) {
        const timeStamp = this._timeString();
        const message = JSON.stringify(['new message', {user: this.user, text: text, timestamp: timeStamp}]);
        this.socket.send(message);
    }

    _timeString () {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();
        const result = `${hours}:${minutes} ${day}.${month}.${year}`
        return result
    }

    displaydMessages (messages) {
        this.container.innerHTML = '';
        for (let index = 0; index < messages.length; index++) {
            this.container.appendChild(this._createMessageElem(messages[index]));
        }
        this.container.scrollTop = this.container.scrollHeight;
    }

    _createMessageElem (message) {
        const elem = document.createElement('div');
        
        if (message.user == this.user) {
            elem.className = 'message-container yours';
            elem.innerHTML = `<div class="message-info">You, ${message.timestamp}</div><div class="message-text">${message.text}</div>`
        } else {
            elem.className = 'message-container';
            elem.innerHTML = `<div class="message-info">${message.user}, ${message.timestamp}</div><div class="message-text">${message.text}</div>`;
        }
        return elem
    }
}