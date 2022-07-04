let canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
let num1 = 0.1
let num2 = 0
let num3 = 0.7
function deg() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 第一个圈
    context.beginPath();
    context.arc(100, 100, 99, num1 * Math.PI, (num1 + 1.4) * Math.PI);
    context.strokeStyle = 'green';
    context.stroke();
    // 第二个圈
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.arc(100, 100, 95, num2 * Math.PI, (num2 + 1.3) * Math.PI);
    context.stroke();
    // 第三个圈
    context.beginPath();
    context.strokeStyle = 'blue';
    context.arc(100, 100, 90, num3 * Math.PI, (num3 + 0.5) * Math.PI);
    context.stroke();
    num1 += 0.04
    num2 -= 0.06
    num3 += 0.05
    requestAnimationFrame(deg)
}
deg()