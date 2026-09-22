import { useState, useEffect } from "react";

const StopMotion = ({
  frameCount = 5,
  interval = 600,
  framePath = "/images/stop-motion/",
  width = "400px",
  height = "400px",
  className = "",
}) => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => {
        // Generar un número aleatorio diferente al actual
        let nextFrame;
        do {
          nextFrame = Math.floor(Math.random() * frameCount) + 1;
        } while (nextFrame === prev && frameCount > 1);

        return nextFrame;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [frameCount, interval]);

  const imageSrc = `${framePath}/frame-${currentFrame}.png`;

  return (
    <div className={`stop-motion-container ${className}`}>
      <img
        src={imageSrc}
        alt={`Frame ${currentFrame}`}
        style={{
          width,
          height,
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

export default StopMotion;
