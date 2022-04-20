import React, { useEffect, useRef } from "react";
import useMousePosition from "../customHooks/useMousePosition/useMousePosition";
import "./Background.scss";
const Background = () => {
  // let hue = 0;
  const canvasRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const mouse = useMousePosition();
  const hueRef = useRef(175);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let requestId;
    ctx.globalCompositeOperation = "lighter";
    // *** Initialize particles
    if (particlesArrayRef.current.length === 0) {
      for (let i = 0; i < 5; i++) {
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
      // ctx.fillRect(0, 0, size, size);

      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.shadowBlur = 15;
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
          particlesArrayRef.current[i].speedX =
            (particlesArrayRef.current[i].posRelativeToMouse.x / distance) * 2.5;
          particlesArrayRef.current[i].speedY =
            (particlesArrayRef.current[i].posRelativeToMouse.y / distance) * 2.5;
            particlesArrayRef.current[i].shrinkSpeed = 1
        }
      }

      // *** Remove small particles from array and add new ones
      for (let i = 0; i < particlesArrayRef.current.length; i++) {
        if (particlesArrayRef.current[i].size <= 0.3) {
          particlesArrayRef.current.splice(i, 1);
          particlesArrayRef.current.push(new Particle(ctx));
          // console.log(particlesArrayRef.current.length);
          // i--;
        }
      }
      // handleParticles();
      hueRef.current++;
      // *** Color range of particles
      hueRef.current > 275 && (hueRef.current = 200);
      requestId = requestAnimationFrame(render);
    }
    render();

    const handleResize = (e) => {
      ctx.canvas.height = window.innerHeight;
      ctx.canvas.width = window.innerWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  function createLightning(i, distance) {
    // let segmentHeight = groundHeight - centerTop.y;
    // console.log(distance)
    let minSegmentDistance = 5;
    let roughness = 2.5;

    let lightning = [];
    lightning.push({
      x: particlesArrayRef.current[i].x,
      y: particlesArrayRef.current[i].y,
    });
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
      // console.log(hueRef.current)

      this.ctx = ctx;
      // this.x = Math.random() * canvas.width;
      // this.y = Math.random() * canvas.width;
      this.x = Math.random() * ctx.canvas.width;
      this.y = Math.random() * ctx.canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      // this.color = `hsl(${hue},100%,50%)`;
      this.color = "rgba(0,150,255,";
      this.color = `hsla(${hueRef.current},100%,50%,`;
      this.shrinkSpeed = 0.02
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
      if (this.size > 0.3) this.size -= this.shrinkSpeed = 0.02;
    }
    draw() {
      var opacity = 1;
      var fills = [
        { size: this.size / 2, opacity: 1 },
        { size: this.size, opacity: opacity },
        { size: this.size * 2, opacity: opacity / 2 },
        { size: this.size * 4, opacity: opacity / 3 },
        { size: this.size * 8, opacity: opacity / 5 },
        { size: this.size * 16, opacity: opacity / 16 },
      ];
      this.ctx.beginPath();
      for (var f in fills) {
        f = fills[f];
        this.ctx.fillStyle = this.color + f.opacity + ")";
        this.ctx.arc(this.x, this.y, f.size, 0, Math.PI * 2, true);
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
      // onMouseMove={(event) => {
      //   // console.log(mousePos)
      //   mouse.current.x = event.clientX;
      //   mouse.current.y = event.clientY;
      // }}
      onMouseOut={(event) => {
        // console.log(mousePos)
        mouse.current.x = undefined;
        mouse.current.y = undefined;
      }}
    ></canvas>
  );
};

export default Background;
