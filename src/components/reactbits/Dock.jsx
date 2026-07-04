import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

function DockItem({ className = '', onClick, mouseX, spring, distance, magnification, baseItemSize, label, isDistinct }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      left: 0,
      width: 80
    };
    return val - (rect.left + rect.width / 2);
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center justify-center rounded-full px-5 py-2 border transition-all duration-250 cursor-pointer shadow-md select-none focus:outline-none ${
        isDistinct
          ? 'bg-[#F5F5F5] text-[#030303] border-[#F5F5F5] hover:bg-[#B5B5B5] hover:border-[#B5B5B5] font-semibold'
          : 'bg-[#030303]/90 text-[#B5B5B5] border-zinc-800 hover:text-[#F5F5F5] hover:border-zinc-700'
      } ${className}`}
      tabIndex={0}
      role="button"
      aria-label={label}
    >
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </motion.div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 60,
  distance = 200,
  panelHeight = 52,
  dockHeight = 120,
  baseItemSize = 42
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scroll Y has passed the Hero viewport (250px)
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: 'none' }}
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} relative flex items-end w-fit gap-3 rounded-full border-zinc-800 border bg-[#030303]/80 backdrop-blur-md pb-2 px-4 shadow-2xl`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label}
            isDistinct={item.isDistinct}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
