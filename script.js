// let playfieldVar = document.getElementById(`playfield`);
// let crosshairVar = document.getElementById(`crosshairId`);

// playfieldVar.addEventListener("mousemove", function(e) {
//     let x = e.clientX;
//     let y = e.clientY;

//     console.log(x);
//     console.log(y);

//     crosshairVar.style.left = `${x - 20}px`;
//     crosshairVar.style.top = `${y - 20}px`;
// });

let enemyHead = document.getElementById(`enemy-head`);

enemyHead.addEventListener("click", headshot);

function backgroundKhaki() {
    enemyHead.style.backgroundColor = `khaki`;
}

setInterval(randomPosition, 3000);

function randomPosition() {
    let enemy1 = document.getElementById(`enemy1`);
    let currentX = window
        .getComputedStyle(enemy1, null)
        .getPropertyValue(`left`);
    let currentY = window
        .getComputedStyle(enemy1, null)
        .getPropertyValue(`top`);

    console.log(`CurrentX: ${currentX}`);
    console.log(`CurrentY: ${currentY}`);

    let w = window.innerWidth;
    let h = window.innerHeight;

    let x = Math.ceil(Math.random() * w);
    let y = Math.ceil(Math.random() * h);

    enemy1.animate(
        [
            {
                left: `${currentX}`,
                top: `${currentY}`,
            },
            {
                left: `${x}px`,
                top: `${y}px`,
            },
        ],
        {
            duration: 5000,
            fill: "forwards",
        }
    );
}

let counter = document.getElementById("counter");
let countNum = 0;

function headshot() {
    enemyHead.style.backgroundColor = `red`;

    setTimeout(backgroundKhaki, 200);

    countNum++;

    counter.innerHTML = countNum;
}
