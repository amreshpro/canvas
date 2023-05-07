let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const context = canvas.getContext('2d');
// context.fillRect(x,y,width,height)
context.fillStyle = "#af3456"
context.fillRect(100,100,100,100)
context.fillStyle = "#af3123"
context.fillRect(400,100,100,100)
context.fillStyle = "#af7456"
context.fillRect(100,300,100,100)
context.fillStyle = "#ae3122"
context.fillRect(100,500,100,100)


// Line
context.beginPath();
context.moveTo(50,300)
context.lineTo(300,100)
context.lineTo(400,300)
context.strokeStyle="#fa34a3"
context.stroke();


for(let i = 0;i<2000;++i){
    // Arch /circle
    let x = Math.random() * window.innerWidth;
    let y = Math.random() *window.innerHeight;
context.beginPath();
context.arc(x,y,30,0,Math.PI*2,false);
context.strokeStyle = "orange"
context.stroke();
}