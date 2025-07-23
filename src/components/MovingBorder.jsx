import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"; //eslint-disable-line no-unused-vars
import { useRef, useEffect } from "react";

export function MovingBorder({
  children,
  as: Component = "button", // eslint-disable-line no-unused-vars
  containerClassName = "",
  borderClassName = "",
  duration = 9000, // Ajusta este valor para cambiar la velocidad (en milisegundos). Menor = más rápido, mayor = más lento.
  className = "",
  ...otherProps
}) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);
  const timeRef = useRef(0); // eslint-disable-line no-unused-vars

  useEffect(() => {
    let animationFrameId;
    const startTime = performance.now();

    const animate = (time) => {
      const length = pathRef.current?.getTotalLength();
      if (length) {
        const elapsed = (time - startTime) % duration;
        const pxPerMillisecond = length / duration;
        progress.set(elapsed * pxPerMillisecond);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId); // Limpieza al desmontar
  }, [duration, progress]);

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val % pathRef.current?.getTotalLength()).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val % pathRef.current?.getTotalLength()).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <Component
      className={`relative h-12 w-40 overflow-hidden bg-transparent p-[1px] text-base ${containerClassName}`}
      style={{ borderRadius: "1rem" }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(1rem * 0.96)` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" ref={pathRef} />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div
            className={`h-18 w-18 bg-[radial-gradient(#3b82f6_40%,transparent_60%)] opacity-[0.8] ${borderClassName}`}
          />
        </motion.div>
      </div>
      <div
        className={`relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl ${className}`}
        style={{ borderRadius: `calc(1rem * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}