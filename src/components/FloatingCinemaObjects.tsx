import { useState } from "react";
import cinemaCamera from "@/assets/cinema-camera.png";
import cinemaClapperboard from "@/assets/cinema-clapperboard.png";
import cinemaReel from "@/assets/cinema-reel.png";
import cinemaLens from "@/assets/cinema-lens.png";

const images = [cinemaCamera, cinemaClapperboard, cinemaReel, cinemaLens];

interface FloatingObject {
  id: number;
  imageIndex: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  driftX: number;
  driftY: number;
  spinSpeed: number;
}

const generateObjects = (): FloatingObject[] => {
  const objects: FloatingObject[] = [];
  const count = 14;

  for (let i = 0; i < count; i++) {
    objects.push({
      id: i,
      imageIndex: i % images.length,
      x: 2 + Math.random() * 90,
      y: 2 + Math.random() * 90,
      size: 50 + Math.random() * 70,
      duration: 18 + Math.random() * 14,
      delay: -Math.random() * 20,
      rotation: Math.random() * 360,
      driftX: (Math.random() - 0.5) * 160,
      driftY: (Math.random() - 0.5) * 120,
      spinSpeed: 8 + Math.random() * 12,
    });
  }

  return objects;
};

const FloatingCinemaObjects = () => {
  const [objects] = useState<FloatingObject[]>(generateObjects);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {objects.map((obj) => (
        <div
          key={obj.id}
          className="absolute animate-cinema-float"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            width: `${obj.size}px`,
            height: `${obj.size}px`,
            animationDuration: `${obj.duration}s`,
            animationDelay: `${obj.delay}s`,
            "--drift-x": `${obj.driftX}px`,
            "--drift-y": `${obj.driftY}px`,
            "--start-rotation": `${obj.rotation}deg`,
            "--end-rotation": `${obj.rotation + (Math.random() > 0.5 ? 60 : -60)}deg`,
          } as React.CSSProperties}
        >
          <img
            src={images[obj.imageIndex]}
            alt=""
            className="w-full h-full object-contain animate-cinema-spin"
            style={{
              animationDuration: `${obj.spinSpeed}s`,
              opacity: 0.45,
              filter: "brightness(1.3) saturate(0.9)",
              mixBlendMode: "screen",
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingCinemaObjects;
