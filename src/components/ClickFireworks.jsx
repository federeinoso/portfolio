import { useEffect } from "react";
import "./ClickFireworks.css";

function ClickFireworks() {
  useEffect(() => {
    const colors = [
      "#ff0000",
      "#ff9900",
      "#ffff00",
      "#33cc33",
      "#0099ff",
      "#9900ff",
      "#ff0099",
    ];
    const particleCount = 20;
    const handleClick = (e) => {
      try {
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "firework-particle";
          particle.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          particle.style.left = `${e.clientX}px`;
          particle.style.top = `${e.clientY}px`;
          document.body.appendChild(particle);
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100 + 50;
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;
          particle.animate(
            [
              {
                transform: "translate(0, 0) scale(1)",
                opacity: 1,
              },
              {
                transform: `translate(${tx}px, ${ty}px) scale(0.3)`,
                opacity: 0,
              },
            ],
            {
              duration: 1000,
              easing: "ease-out",
              fill: "forwards",
            },
          );
          setTimeout(() => {
            particle.remove();
          }, 1000);
        }
      } catch (error) {
        console.error("Failed to create firework:", error);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return null;
}
export default ClickFireworks;
