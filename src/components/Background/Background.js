import React, { useEffect, useRef } from "react";
import useMousePosition from "../useMousePosition/useMousePosition";
import "./Background.scss";
const Background = () => {
  // let hue = 0;
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: undefined, y: undefined });
  const particlesArrayRef = useRef([]);
  const mouse = useMousePosition()
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let requestId
    if (particlesArrayRef.current.length === 0) {
      for (let i = 0; i < 20; i++) {
        particlesArrayRef.current.push(new Particle(ctx));
      }
    }
    console.log(particlesArrayRef.current.length);
    function render() {
      // if (particlesArrayRef.current.length < 20) {
      //   for (let i = 0; i < 100; i++) {
      //     particlesArrayRef.current.push(new Particle());
      //   }
      // }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        particlesArrayRef.current[i].draw();
        particlesArrayRef.current[i].update();

        const dx = particlesArrayRef.current[i].x - mouse.current.x;
        const dy = particlesArrayRef.current[i].y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // console.log(mousePos.current.x)
        if (distance < 200) {
          let lightning = createLightning(i, distance);
          // console.log(i)
          ctx.strokeStyle = "hsl(180, 80%, 80%)";
          ctx.beginPath();
          ctx.lineWidth = 1;
          // ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          // ctx.lineTo(mouse.x, mouse.y);
          // ctx.closePath()
          for (let j = 0; j < lightning.length; j++) {
            ctx.lineTo(lightning[j].x, lightning[j].y);
          }
          ctx.stroke();
          // ctx.closePath()
          particlesArrayRef.current[i].speedX = particlesArrayRef.current[i].posRelativeToMouse.x / distance *5;
          particlesArrayRef.current[i].speedY = particlesArrayRef.current[i].posRelativeToMouse.y / distance *5;
        }
      }

      

      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        if (particlesArrayRef.current[i].size <= 0.3) {
          particlesArrayRef.current.splice(i, 1);
          particlesArrayRef.current.push(new Particle(ctx));
          // console.log(particlesArrayRef.current.length);
          // i--;
        }
      }
      // handleParticles();
      // hue++;
      // requestAnimationFrame(render);

      requestId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  function createLightning(i, distance) {
    // let segmentHeight = groundHeight - centerTop.y;
    // console.log(distance)
    let minSegmentDistance = 5;
    let roughness = 2.5;
  
    let lightning = [];
    lightning.push({ x: particlesArrayRef.current[i].x, y: particlesArrayRef.current[i].y });
    lightning.push({ x: mouse.current.x, y: mouse.current.y });
    let currentDifference = 500 / 10;
    while (distance > minSegmentDistance) {
      let newSegments = [];
      for (let i = 0; i < lightning.length - 1; i++) {
        let start = lightning[i];
        let end = lightning[i + 1];
        let midX = (start.x + end.x) / 2;
        let midY = (start.y + end.y) / 2;
        let newX = midX + (Math.random() * 2 - 1) * currentDifference;
        let newY = midY + (Math.random() * 2 - 1) * currentDifference;
        // newSegments.push(start, { x: newX, y: (start.y + end.y) / 2 });
        newSegments.push(start, { x: newX, y: newY });
      }
  
      newSegments.push(lightning.pop());
      lightning = newSegments;
  
      currentDifference /= roughness;
      distance /= 2;
    }
    // console.log(mouse.current)
    return lightning;
  }

  class Particle {
    constructor(ctx) {
      this.ctx = ctx;
      // this.x = Math.random() * canvas.width;
      // this.y = Math.random() * canvas.width;
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      // this.color = `hsl(${hue},100%,50%)`;
      this.color = 'rgba(0,150,255,'
      // this.color = `red`;
      this.posRelativeToMouse = {
        x: this.x - mouse.current.x,
        y: this.y - mouse.current.y,
      };
      this.distance = Math.sqrt(
        this.posRelativeToMouse.x * this.posRelativeToMouse.x +
          this.posRelativeToMouse.y * this.posRelativeToMouse.y
      );
      this.forceDirection = {
        x: this.posRelativeToMouse.x / this.distance,
        y: this.posRelativeToMouse.y / this.distance,
      };
      // console.log(this.forceDirection.x)
      this.maxDistance = 1000;
      this.force = (this.maxDistance - this.distance) / this.maxDistance;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      // this.x += this.speedX -= this.forceDirection.x * this.force;
      // this.y += this.speedY -= this.forceDirection.y * this.force;
      if (this.size > 0.3) this.size -= 0.1;
    }

    // draw() {
    //   this.ctx.fillStyle = this.color;
    //   this.ctx.beginPath();
    //   this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    //   this.ctx.fill();
    // }
    draw() {
      // ctx.fillStyle = "blue";
      // ctx.beginPath();
      // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      // ctx.strokeStyle = "blue";
      // ctx.fill();
      // ctx.stroke();
  
      var opacity = 1;
      var fills = [
        {size:this.size/2,  opacity:1},
        {size:this.size,  opacity:opacity},
        {size:this.size * 2, opacity:opacity / 2},
        {size:this.size * 4, opacity:opacity / 3},
        {size:this.size * 8, opacity:opacity / 5},
        {size:this.size * 16, opacity:opacity / 16}
      ];
      this.ctx.beginPath();
      for(var f in fills) {
        f = fills[f];
        this.ctx.fillStyle = this.color + f.opacity + ')';
        this.ctx.arc(
          this.x, 
          this.y, 
          f.size , 0, Math.PI*2, true); 
          this.ctx.fill();
      }
      this.ctx.closePath();
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={(event) => {
        // console.log(mousePos)
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
      }}
      onMouseOut={(event) => {
        // console.log(mousePos)
        mouse.current.x = undefined;
        mouse.current.y = undefined;
      }}
    >
    </canvas>
  );
};

export default Background;
