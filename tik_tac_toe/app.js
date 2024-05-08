let boxes = document.querySelectorAll(".box");
let msg_container1 = document.querySelector(".msg_container");
let msg1 = document.querySelector("#msg");
let newgamebtn = document.querySelector(".newgame");
let resetbtn = document.querySelector(".reset_btn");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enabledboxes();
    msg_container1.classList.add("hide");
}

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Corrected typo from 'flase' to 'false'
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg1.innerText = `Congratulations, winner is ${winner}`;
    msg_container1.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [p1, p2, p3] = pattern;
        let pas1val = boxes[p1].innerText;
        let pas2val = boxes[p2].innerText;
        let pas3val = boxes[p3].innerText;
        if (pas1val !== "" && pas1val === pas2val && pas2val === pas3val) {
            console.log("Winner", pas1val);
            showWinner(pas1val);
            return; // Stop checking other patterns once a winner is found
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
