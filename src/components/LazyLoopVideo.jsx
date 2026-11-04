import { useEffect, useRef } from "react";

export default function LazyLoopVideo({ src, poster, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      video.controls = true;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.hasAttribute("src")) {
            video.src = src;
          }

          if (!reducedMotion) {
            video.play().catch(() => {
            });
          }
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="product-video"
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={title}
    />
  );
}
