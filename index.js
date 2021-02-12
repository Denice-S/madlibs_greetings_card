const openBtn = document.querySelector(".card-container");
const to = document.querySelector(".to");
const my = document.querySelector(".my");
const from = document.querySelector(".from");


const toArr = ["Purple Donkey Ears", "Glow Stick", "Luscious LipBalm", "Reticulated Python", "HTML", "Palm Tree", "Kitchen Table", "Javascript", "Fireworks", "Infinite Pikachu", "Fabulous Artichoke"];
const myArr = ["Insomnia", "Cherry Tomato", "Coffee Table", "Pink Fairy Armadillo", "Coral Reef", "Cozy Armchair", "CSS", "Motorcycle", "Shiny Disco Ball", " Pygmy Goat", "Space Hopper"];
const fromArr = ["Disco Dancer", "Raving Pigeon", "Cocktail Umbrella", "Speeding Chicken", "Can Opener", "Cunning Fox", "Biscuit Barrel", "Sneezing Panda", "Complicated Monkey", "Menacing Mongoose",];

let tooMsg = toArr[Math.floor(Math.random() * toArr.length)];
let myMsg = myArr[Math.floor(Math.random() * myArr.length)];
let fromMsg = fromArr[Math.floor(Math.random() * fromArr.length)];



const generateCard = () => {
    to.innerHTML = `<b> ${tooMsg}</b>`
    my.innerHTML = `"You are my <b>${myMsg}"</b>`
    from.innerHTML = ` <br> <b>${fromMsg}</b>`
}


openBtn.onclick = function () {
    document.body.classList.toggle("open");
    generateCard();
};