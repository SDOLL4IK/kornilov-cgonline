import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseSpeedX: number;
      baseSpeedY: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile 
        ? Math.min(40, Math.floor(window.innerWidth / 20))
        : Math.min(100, Math.floor(window.innerWidth / 12));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const speedX = (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6);
        const speedY = (Math.random() - 0.5) * (isMobile ? 0.3 : 0.6);
        const margin = 20;
        particles.push({
          x: margin + Math.random() * (canvas.width - margin * 2),
          y: margin + Math.random() * (canvas.height - margin * 2),
          size: Math.random() * 2.75 + 1.4,
          speedX,
          speedY,
          baseSpeedX: speedX,
          baseSpeedY: speedY,
          opacity: Math.random() * 0.6 + 0.25,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const interactionRadius = 250;
      const time = Date.now() * 0.001;

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < interactionRadius && dist > 0) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          particle.speedX = particle.baseSpeedX + Math.cos(angle) * force * 3;
          particle.speedY = particle.baseSpeedY + Math.sin(angle) * force * 3;
        } else {
          particle.speedX += (particle.baseSpeedX - particle.speedX) * 0.05;
          particle.speedY += (particle.baseSpeedY - particle.speedY) * 0.05;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Smooth wrapping with margin to prevent edge glitching
        const margin = 10;
        if (particle.x < -margin) particle.x = canvas.width + margin;
        if (particle.x > canvas.width + margin) particle.x = -margin;
        if (particle.y < -margin) particle.y = canvas.height + margin;
        if (particle.y > canvas.height + margin) particle.y = -margin;

        // Pulsating glow
        const pulse = Math.sin(time * 1.5 + particle.x * 0.01) * 0.15 + 0.85;
        const proximity = dist < interactionRadius ? 1 - dist / interactionRadius : 0;
        const hue = 220 - proximity * 40;
        const saturation = 80 + proximity * 20;
        const lightness = 55 + proximity * 20;
        const glowSize = particle.size * (3.5 + proximity * 2) * pulse;

        // Outer glow layer
        const outerGlow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize * 1.8
        );
        outerGlow.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${(particle.opacity * 0.15 + proximity * 0.1) * pulse})`);
        outerGlow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();

        // Inner glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness + 15}%, ${(particle.opacity + proximity * 0.4) * pulse})`);
        gradient.addColorStop(0.4, `hsla(${hue}, 100%, ${lightness}%, ${particle.opacity * 0.5 * pulse})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 90%, 85%, ${(particle.opacity * 0.8 + proximity * 0.2) * pulse})`;
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(220, 85%, 65%, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resizeCanvas();
        createParticles();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticlesBackground;
