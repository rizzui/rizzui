import React from "react";

type StarParticlesProps = {
  limit?: number;
  animated?: boolean;
  animationSpeed?: number;
  particleSize?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

export default function StarParticles({
  limit = 30,
  particleSize = 1,
  animated = false,
  animationSpeed = 0.2,
  backgroundColor = "transparent",
  color = "white",
  className = "absolute top-0 left-0 -z-[1]",
}: StarParticlesProps) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initializeParticles();
      drawParticles();
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + particleSize,
        speed: Math.random() * 3 + 1,
      };
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speed * animationSpeed;

        if (particle.y > canvas.height) {
          particles[i] = createParticle();
          particles[i].y = -5; // Restart particle above the canvas
        }
      }

      if (animated) {
        requestAnimationFrame(drawParticles);
      }
    };

    const initializeParticles = () => {
      particles = Array.from({ length: limit }, createParticle);
    };

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    initializeParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [limit, animated, animationSpeed, particleSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ backgroundColor, width: "100%", height: "100%" }}
    />
  );
}
