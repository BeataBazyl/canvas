import React, {useLayoutEffect} from 'react'


function App() {
  useLayoutEffect(()=> {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.fillStyle = "green";
    context.fillRect(10,10,150,100);
  })

  return (
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>
      Canvas
    </canvas>
  )
}

export default App