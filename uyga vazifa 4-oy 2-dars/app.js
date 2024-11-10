let tasbeh = document.querySelector(".tasbeh");
let count = 0;
let incre = document.querySelector(".increment");
let decre = document.querySelector(".decrement");
incre.addEventListener("click", () => {
  count++;
  document.querySelector("h1").textContent = count;
});
decre.addEventListener("click", () => {
  count = 0;
  document.querySelector("h1").textContent = count;
});

// tasbeh qismi tugadi

let qizil = document.querySelector(".qizil");
let sariq = document.querySelector(".sariq");
let yashil = document.querySelector(".yashil");

let count0 = 0;

setInterval(() => {
    if(count0 === 0){
        qizil.style.backgroundColor = "red";
        sariq.style.backgroundColor = "lightgray";
        yashil.style.backgroundColor = "lightgray";
    } else if(count0 === 1){
        qizil.style.backgroundColor = "lightgray";
        sariq.style.backgroundColor = "yellow";
        yashil.style.backgroundColor = "lightgray";
    } else if(count0 === 2){
        qizil.style.backgroundColor = "lightgray";
        sariq.style.backgroundColor = "lightgray";
        yashil.style.backgroundColor = "green";
    }

    count0 = (count0 + 1) % 3;
}, 2000)

// svetafor qismi tugadi

let count1 = 0;
let count2 = 0;
let count3 = "";
let kalkul = document.querySelector(".kalkul");

let pilus = document.querySelector(".pilus");
let minus = document.querySelector(".minus");
let bolish = document.querySelector(".bolish");
let kopaytirish = document.querySelector(".kopaytirish");
let bir = document.querySelector(".bir");
let ikki = document.querySelector(".ikki");
let uch = document.querySelector(".uch");
let tort = document.querySelector(".tort");
let besh = document.querySelector(".besh");
let olti = document.querySelector(".olti");
let yetti = document.querySelector(".yetti");
let sakkiz = document.querySelector(".sakkiz");
let toqqiz = document.querySelector(".toqqiz");
let nol = document.querySelector(".nol");
let ok = document.querySelector(".ok");

function addNumber(num) {
  count2 = count2 * 10 + num;
  kalkul.textContent = count2;
}

pilus.addEventListener("click", () => {
  count1 = count2;
  count3 = "+";
  count2 = 0;
  kalkul.textContent = count3;
});
minus.addEventListener("click", () => {
  count1 = count2;
  count3 = "-";
  count2 = 0;
  kalkul.textContent = count3;
});
bolish.addEventListener("click", () => {
  count1 = count2;
  count3 = "/";
  count2 = 0;
  kalkul.textContent = count3;
});
kopaytirish.addEventListener("click", () => {
  count1 = count2;
  count3 = "*";
  count2 = 0;
  kalkul.textContent = count3;
});


bir.addEventListener("click", () => addNumber(1));
ikki.addEventListener("click", () => addNumber(2));
uch.addEventListener("click", () => addNumber(3));
tort.addEventListener("click", () => addNumber(4));
besh.addEventListener("click", () => addNumber(5));
olti.addEventListener("click", () => addNumber(6));
yetti.addEventListener("click", () => addNumber(7));
sakkiz.addEventListener("click", () => addNumber(8));
toqqiz.addEventListener("click", () => addNumber(9));
nol.addEventListener("click", () => addNumber(0));

ok.addEventListener("click", () => {
  let natija = 0;
  if (count3 === "+") natija = count1 + count2;
  if (count3 === "-") natija = count1 - count2;
  if (count3 === "*") natija = count1 * count2;
  if (count3 === "/") natija = count1 / count2;

  kalkul.textContent = natija;
  count2 = 0;
  count1 = 0;
  count3 = "";
});
