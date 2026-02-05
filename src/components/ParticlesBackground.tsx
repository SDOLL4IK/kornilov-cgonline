 import { useEffect, useRef } from "react";
 
 const ParticlesBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
 
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
     }> = [];
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     const createParticles = () => {
       const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
       particles = [];
       for (let i = 0; i < particleCount; i++) {
         particles.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
           size: Math.random() * 2 + 1,
           speedX: (Math.random() - 0.5) * 0.3,
           speedY: (Math.random() - 0.5) * 0.3,
           opacity: Math.random() * 0.5 + 0.2,
         });
       }
     };
 
     const animate = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       particles.forEach((particle) => {
         particle.x += particle.speedX;
         particle.y += particle.speedY;
 
         if (particle.x < 0) particle.x = canvas.width;
         if (particle.x > canvas.width) particle.x = 0;
         if (particle.y < 0) particle.y = canvas.height;
         if (particle.y > canvas.height) particle.y = 0;
 
         const gradient = ctx.createRadialGradient(
           particle.x,
           particle.y,
           0,
           particle.x,
           particle.y,
           particle.size * 2
         );
         gradient.addColorStop(0, `hsla(250, 100%, 65%, ${particle.opacity})`);
         gradient.addColorStop(0.5, `hsla(200, 100%, 50%, ${particle.opacity * 0.5})`);
         gradient.addColorStop(1, "transparent");
 
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
         ctx.fillStyle = gradient;
         ctx.fill();
       });
 
       animationId = requestAnimationFrame(animate);
     };
 
     resizeCanvas();
     createParticles();
     animate();
 
     window.addEventListener("resize", () => {
       resizeCanvas();
       createParticles();
     });
 
     return () => {
       cancelAnimationFrame(animationId);
       window.removeEventListener("resize", resizeCanvas);
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