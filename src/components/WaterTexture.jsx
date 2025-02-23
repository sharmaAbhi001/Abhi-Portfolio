import { useRef, useEffect, useState } from "react";

const WaterTexture = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const maxAge = 100;
  const radius = dimensions.width * 0.03;

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const point = {
        x: ev.clientX / dimensions.width,
        y: ev.clientY / dimensions.height,
        age: 0,
      };
      pointsRef.current.push(point);
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const clearCanvas = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawPoint = (point) => {
      let pos = {
        x: point.x * canvas.width,
        y: point.y * canvas.height,
      };
      let intensity = 1 - point.age / maxAge;
      let offset = canvas.width * 3;

      ctx.shadowOffsetX = offset;
      ctx.shadowOffsetY = offset;
      ctx.shadowBlur = radius;
      ctx.shadowColor = `rgba(255,255,255,${0.2 * intensity})`;

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,0,0,${0.7 * intensity})`;
      ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const renderFrame = () => {
      clearCanvas();
      pointsRef.current.forEach(drawPoint);

      pointsRef.current = pointsRef.current
        .map((p) => ({ ...p, age: p.age + 1 }))
        .filter((p) => p.age < maxAge);

      requestAnimationFrame(renderFrame);
    };

    renderFrame();
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      id="WaterTexture"
      width={dimensions.width}
      height={dimensions.height}
      style={{ display: "block", position: "fixed", top: 0, left: 0 }}
    />
  );
};

export default WaterTexture;
