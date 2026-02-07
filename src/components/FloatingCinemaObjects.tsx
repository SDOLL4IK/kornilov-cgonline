import { useEffect, useState } from "react";

const CameraIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="18" width="38" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <polygon points="44,24 58,16 58,48 44,40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="25" cy="32" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <circle cx="25" cy="32" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="10" y="14" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const ClapperboardIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="48" height="34" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M8 22 L56 22 L56 12 L8 12 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <line x1="18" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="30" y1="12" x2="36" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="42" y1="12" x2="48" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <circle cx="14" cy="9" r="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const FilmReelIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="14" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="32" cy="50" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="14" cy="32" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="50" cy="32" r="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="45" cy="45" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="45" cy="19" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="19" cy="45" r="3" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Distortion grid - slightly curved lines */}
    <path d="M8 16 Q32 12 56 16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M8 28 Q32 22 56 28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M8 40 Q32 36 56 40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M8 52 Q32 48 56 52" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M14 8 Q10 32 14 56" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M26 8 Q22 32 26 56" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M38 8 Q42 32 38 56" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M50 8 Q54 32 50 56" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <rect x="6" y="6" width="52" height="52" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

interface FloatingObject {
  id: number;
  icon: "camera" | "clapperboard" | "reel" | "grid";
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  driftX: number;
  driftY: number;
}

const generateObjects = (): FloatingObject[] => {
  const icons: FloatingObject["icon"][] = ["camera", "clapperboard", "reel", "grid"];
  const objects: FloatingObject[] = [];

  // Create 8-10 objects spread across the screen
  const count = 9;
  for (let i = 0; i < count; i++) {
    objects.push({
      id: i,
      icon: icons[i % icons.length],
      x: 5 + Math.random() * 85,
      y: 5 + Math.random() * 85,
      size: 32 + Math.random() * 40,
      duration: 25 + Math.random() * 20,
      delay: -Math.random() * 20,
      rotation: Math.random() * 360,
      driftX: (Math.random() - 0.5) * 120,
      driftY: (Math.random() - 0.5) * 80,
    });
  }

  return objects;
};

const FloatingCinemaObjects = () => {
  const [objects] = useState<FloatingObject[]>(generateObjects);

  const renderIcon = (icon: FloatingObject["icon"], size: number) => {
    const className = `w-full h-full text-primary/30`;
    switch (icon) {
      case "camera":
        return <CameraIcon className={className} />;
      case "clapperboard":
        return <ClapperboardIcon className={className} />;
      case "reel":
        return <FilmReelIcon className={className} />;
      case "grid":
        return <GridIcon className={className} />;
    }
  };

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
            "--end-rotation": `${obj.rotation + (Math.random() > 0.5 ? 30 : -30)}deg`,
          } as React.CSSProperties}
        >
          {renderIcon(obj.icon, obj.size)}
        </div>
      ))}
    </div>
  );
};

export default FloatingCinemaObjects;
