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
