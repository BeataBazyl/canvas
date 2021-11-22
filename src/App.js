import React, {useLayoutEffect} from 'react'


function App() {
  useLayoutEffect(()=> {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.fillStyle = "pink";
    // context.fillRect(100,100,400,400);

    context.lineWidth = 4;
    context.beginPath();
    context.rect(100, 100, 400, 400);
    // context.stroke();

    context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    // context.stroke();

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let width = 60;
        let height = 60;
        let gap = 20;
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;
    
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
      }
    }
  })

  return (
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>
      Canvas
    </canvas>
  )
}

export default App