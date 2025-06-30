import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = '100%',
  maxHeight = '100%',
  items = [],
  itemMinHeight = 100,
  isTilted = false,
  tiltDirection = 'left',
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = 'down',
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return 'none';
    return tiltDirection === 'left'
      ? 'rotateX(10deg) rotateZ(-10deg) skewX(10deg)'
      : 'rotateX(10deg) rotateZ(10deg) skewX(-10deg)';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !items.length) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const itemHeight = divItems[0].offsetHeight;
    const totalHeight = itemHeight * items.length;

    const wrapFn = gsap.utils.wrap(-itemHeight, totalHeight - itemHeight);

    gsap.set(divItems, {
      y: (i) => i * itemHeight,
    });

    const timeline = gsap.timeline();

    if (autoplay) {
      const directionFactor = autoplayDirection === 'down' ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      timeline.to(divItems, {
        duration: items.length / (autoplaySpeed * 0.1), // Adjust duration based on speed
        ease: 'none',
        y: `+=${totalHeight * directionFactor}`,
        modifiers: {
          y: gsap.utils.unitize(wrapFn),
        },
        repeat: -1,
      });

      if (pauseOnHover) {
        container.addEventListener('mouseenter', () => timeline.pause());
        container.addEventListener('mouseleave', () => timeline.play());
      }
    }

    const observer = Observer.create({
      target: container,
      type: 'wheel,touch,pointer',
      preventDefault: true,
      onPress: ({ target }) => {
        timeline.pause();
        target.style.cursor = 'grabbing';
      },
      onRelease: ({ target }) => {
        if (autoplay) timeline.play();
        target.style.cursor = 'grab';
      },
      onWheel: ({ deltaY }) => {
        gsap.to(divItems, {
          duration: 0.5,
          y: `+=${-deltaY * 2}`,
          modifiers: { y: gsap.utils.unitize(wrapFn) },
          ease: 'power2.out',
        });
      },
      onDrag: ({ deltaY }) => {
        gsap.to(divItems, {
          duration: 0.5,
          y: `+=${deltaY * 0.5}`,
          modifiers: { y: gsap.utils.unitize(wrapFn) },
          ease: 'power2.out',
        });
      },
    });

    return () => {
      observer.kill();
      timeline.kill();
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
  ]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-1/4 w-full bg-gradient-to-b from-[#060010] to-transparent"></div>
      <div className="h-1/f ull pointer-events-none absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-[#060010] to-transparent"></div>

      <div
        className="flex cursor-grab flex-col overscroll-contain"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
          transformOrigin: 'center center',
        }}
      >
        {items.map((item, i) => (
          <div
            className="box-border flex items-center justify-center border-y border-white/10 p-4 text-center text-xl font-semibold select-none"
            key={i}
            style={{ minHeight: `${itemMinHeight}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
