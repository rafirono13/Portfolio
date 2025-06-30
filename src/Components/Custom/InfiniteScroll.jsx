import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// Note: We removed Observer since we don't need user interaction!
// gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  items = [],
  // Renamed for clarity and set a default that feels good!
  speed = 1,
  direction = 'up',
  itemMinHeight = 80,
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    // --- SETUP ---
    const allItems = itemsRef.current;
    // We use the first item to calculate the total height, including its margin
    const itemHeight = allItems[0].offsetHeight;
    const itemMargin = parseFloat(getComputedStyle(allItems[0]).marginTop);
    const totalItemHeight = itemHeight + itemMargin;
    const containerHeight = container.offsetHeight;

    // Total height of the entire loop (all items stacked)
    const loopHeight = totalItemHeight * items.length;

    // This is the magic function that wraps items around when they go off-screen
    const wrap = gsap.utils.wrap(0, loopHeight);
    const directionFactor = direction === 'up' ? -1 : 1;

    // Set the initial vertical position for each item
    gsap.set(allItems, {
      y: (i) => i * totalItemHeight,
      // We also manage opacity here for the fade-in/fade-out effect
      opacity: 1,
    });

    // --- ANIMATION LOOP using requestAnimationFrame for smoothness ---
    let animationFrameId;
    let currentY = 0;

    const animate = () => {
      // Move the position by the desired speed
      currentY += speed * directionFactor;

      // Update each item's position and opacity
      allItems.forEach((item, i) => {
        // The core movement logic
        const y = wrap(i * totalItemHeight + currentY);

        // Calculate opacity based on position within the container for a smooth fade
        const distanceFromCenter = Math.abs(
          y - containerHeight / 2 + itemHeight / 2,
        );
        const fadeZone = containerHeight * 0.4; // How much of the top/bottom is used for fading
        const opacity = Math.max(
          0,
          1 -
            Math.max(0, distanceFromCenter - fadeZone) /
              (containerHeight / 2 - fadeZone),
        );

        gsap.set(item, { y, opacity });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
    // We only need to re-run the effect if the items array changes.
  }, [items, speed, direction]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-1/4 w-full bg-gradient-to-b from-[#060010] to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-1/4 w-full bg-gradient-to-t from-[#060010] to-transparent"></div>

      <div className="relative h-full" ref={containerRef}>
        {items.map((item, i) => (
          <div
            className="absolute my-3 flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[.03] px-8 py-4 text-xl font-semibold text-white shadow-inner shadow-white/5 select-none"
            key={i}
            ref={(el) => (itemsRef.current[i] = el)} // Store a ref to each item
            style={{ minHeight: `${itemMinHeight}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
