import Chatbox from "../js/chatbox";
import Userbox from "../js/userbox";

const socket = new WebSocket('wss://sse-ws-server-4itr.onrender.com');
const userbox = new Userbox();
const chatbox = new Chatbox(socket);

document.querySelector('.alias').value = '';

socket.addEventListener('open', (event) => {
    console.log('Connected to the server');
});

socket.addEventListener('message', (event) => {
    const serverResponse = Array.from(JSON.parse(event.data));
    const usersOnline = Array.from(serverResponse[0]);
    const messages = Array.from(serverResponse[1]);
    chatbox.displaydMessages(messages);
    userbox.displayUsers(usersOnline);

    function userRegister() {
        chatbox.user = document.querySelector('.alias').value;
            const tooltip = document.getElementById('tooltip');
            tooltip.onclick = () => tooltip.style.display = 'none';
            
            if (chatbox.user == '') {
                tooltip.textContent = 'необходимо ввести имя пользователя';
                tooltip.style.display = 'flex';
            } else {
                if (usersOnline.includes(chatbox.user)) {
                    tooltip.textContent = 'Такой пользователь уже зарегестрирован';
                    tooltip.style.display = 'flex';
                } else {
                    document.querySelector('.modal').style.display = "none";
                    document.querySelector('.overlay').style.display = "none";
                    const message = JSON.stringify(['new user', chatbox.user]);
                    socket.send(message);
                }
            }
    }

    document.querySelector('.button').addEventListener('click', () => {
        userRegister();
    });

    document.querySelector('.alias').addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            userRegister();
        }
    });
    

});



