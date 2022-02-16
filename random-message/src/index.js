const messages = [
    "Oscar",
    "Esteban",
    "Andres",
    "Carlos",
    "Diego"
]

const randoMmsg = () => {
    const message = messages[Math.floor(Math.random() *
        messages.length)];
    console.log(message);
};

module.exports = { randoMmsg };