export default class Chatbox {
    constructor () {
        this.user = null;
        this.message = {
            user: this.user,
            timestamp: null,
            text: null
        };
        this.markdown = '<div class="message-info"></div><div class="message-text"></div>'
    }

    init () {
        document.querySelector('.button').addEventListener('click', () => {
            this.user = document.querySelector('.alias').value;
            document.querySelector('.modal').style.display = "none"
            document.querySelector('.overlay').style.display = "none"
            
        })
    }

    createMessage () {
        console.log('send message')
    }

    sandMessage () {
        console.log('send message')
    }

    displaydMessages () {
        console.log('display messages')
    }
}