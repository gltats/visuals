let canvas = document.querySelector('canvas');

let context = canvas.getContext('2d');

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = "grey";
context.rect(60, 50, 300, 200);
context.stroke();
context.fillStyle = 'pink';
context.fillRect(60, 50, 300, 200);

context.beginPath();
context.strokeStyle = "red";
context.arc(210, 150, 50, 0, 2 * Math.PI);
context.stroke();


for (let i = 0; i < 5; i++){
for (let j = 0; j < 3; j++){
let width = 30;
let height = 30;
let gap = 30;
let x = 75 + (width + gap)* i;
let y = 75 + (width + gap)* j;   

context.beginPath();
context.rect(x, y, width, height);
context.strokeStyle = "green";
context.stroke();

}
}
