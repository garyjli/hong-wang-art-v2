import React, { useState, useRef } from 'react'

import './styles/Gallery.css'

function Gallery() {
  // Calculate 3 or 1 once on initial render, and then use a resize listener to adjust numColumns using the setter
  const [numColumns, setNumColumns] = useState(window.matchMedia("(min-width: 769px)").matches ? 3 : 1);

  const boxRef = useRef<HTMLDivElement>(null);

  return(
    <main>

      <div className="gallery-container">
        <div className="box" ref={boxRef}>

        </div>
      </div>

      <div id="imageModal" className="modal">
        <div className="close" onClick={() => closeModal()}>
          &times;
        </div>

        <div className="modal-img-container">
          <img id="modalImage"></img>
        </div>
      </div>

    </main>
  );
}

export default Gallery