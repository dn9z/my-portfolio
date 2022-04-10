import React, { useEffect, useRef } from "react";
import "./Background.scss";
const Background = () => {
  // let hue = 0;
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: undefined, y: undefined });
  const particlesArrayRef = useRef([]);

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
      this.color = `red`;
      this.posRelativeToMouse = {
        x: this.x - mousePos.current.x,
        y: this.y - mousePos.current.y,
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

    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={(event) => {
        // console.log(mousePos)
        mousePos.current.x = event.clientX;
        mousePos.current.y = event.clientY;
      }}
    >
    </canvas>
  );
};

export default Background;
