import { useRef, useEffect } from 'react';

export default function InfiniteScroll({
  items = [],
  speed = 1,
  direction = 'up',
  itemMinHeight = 80,
}) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    if (!container || !scrollElement || items.length === 0) return;

    // Create duplicated items for seamless loop
    const itemHeight = itemMinHeight + 24; // 24px for margins (my-3 = 12px top + 12px bottom)
    const totalHeight = items.length * itemHeight;

    let animationId;
    let currentTranslate = 0;
    const directionMultiplier = direction === 'up' ? -1 : 1;

    const animate = () => {
      currentTranslate += speed * directionMultiplier;

      // Reset position for seamless loop
      if (Math.abs(currentTranslate) >= totalHeight) {
        currentTranslate = 0;
      }

      scrollElement.style.transform = `translateY(${currentTranslate}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [items, speed, direction, itemMinHeight]);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative h-full w-full overflow-hidden" ref={containerRef}>
      {/* Top fade gradient */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-1/4 w-full bg-gradient-to-b from-[#060010] to-transparent"></div>

      {/* Bottom fade gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-1/4 w-full bg-gradient-to-t from-[#060010] to-transparent"></div>

      <div className="flex flex-col" ref={scrollRef}>
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="my-3 flex w-full flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.03] px-8 py-4 text-xl font-semibold text-white shadow-inner shadow-white/5 select-none"
            style={{ minHeight: `${itemMinHeight}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
