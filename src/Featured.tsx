import './styles/Featured.css'

import React, { useRef, useState, useEffect } from 'react'

function Featured() {
  // intialize a reference
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = 9;
  const titles = [
    '" Untitled Work 1 "',
    '" Journey of Courage "',
    '" Untitled Work 3 "',
    '" Untitled Work 4 "',
    '" Untitled Work 5 "',
    '" Untitled Work 6 "',
    '" Untitled Work 7 "',
    '" Untitled Work 8 "',
    '" Untitled Work 9 "',
  ];

  useEffect(() => {
    const onUp = () => setIsDragging(false);
    window.addEventListener('mouseup', onUp);
    return () => void window.removeEventListener('mouseup', onUp);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    // prevents default drag
    e.preventDefault();
    if (!sliderRef.current) return;
    setIsDragging(true);
    const rect = sliderRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault(); // prevents text/image selection
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 3; // drag sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const onScroll = () => {
      // assume all slides are equal width
      const slideWidth = slider.clientWidth
      const idx = Math.round(slider.scrollLeft / slideWidth)
      setActiveIndex(Math.min(Math.max(idx, 0), slideCount - 1))
    }

    slider.addEventListener('scroll', onScroll, { passive: true })
    return () => void slider.removeEventListener('scroll', onScroll)
  }, [])

  return(
    <main>
      <div className="img-container">
        <div className="slider-wrapper">
          <div 
            className="slider"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <img id="0" src="images/a1.jpeg" />
            <img id="1" src="images/a2.jpeg" />
            <img id="2" src="images/a3.jpeg" />
            <img id="3" src="images/a4.jpeg" />
            <img id="4" src="images/a5.jpeg" />
            <img id="5" src="images/a6.jpeg" />
            <img id="6" src="images/a7.jpeg" />
            <img id="7" src="images/a8.jpeg" />
            <img id="8" src="images/a9.jpeg" />
          </div>

          <div className="slider-nav">
            {[...Array(slideCount).keys()].map(i => (
              <a
                key={i}
                href={`#${i}`}
                className={i === activeIndex ? 'dot active' : 'dot'}
              />
            ))}
          </div>
        </div>

        <div className="title">
          <p id="title" key={activeIndex}>{titles[activeIndex]}</p>
        </div>
      </div>
    </main>
  );
}

export default Featured