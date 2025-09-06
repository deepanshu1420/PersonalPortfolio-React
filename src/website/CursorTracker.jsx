import React, { useEffect } from 'react';
import gsap from 'gsap';

function CursorTracker() {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Use GSAP's quickTo for a highly optimized, smooth animation
    const dotXTo = gsap.quickTo(cursorDot, "x", { 
      duration: 0.15, // ✅ Quicker dot movement
      ease: "power3" 
    });
    const dotYTo = gsap.quickTo(cursorDot, "y", { 
      duration: 0.15, // ✅ Quicker dot movement
      ease: "power3" 
    });

    const outlineXTo = gsap.quickTo(cursorOutline, "x", { 
      duration: 0.5, // ✅ Quicker, less "heavy" trail
      ease: "power3" 
    });
    const outlineYTo = gsap.quickTo(cursorOutline, "y", { 
      duration: 0.5, // ✅ Quicker, less "heavy" trail
      ease: "power3" 
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      dotXTo(clientX);
      dotYTo(clientY);
      outlineXTo(clientX);
      outlineYTo(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
    </>
  );
}

export default CursorTracker;