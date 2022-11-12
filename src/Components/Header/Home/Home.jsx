import React from 'react';


export default function Home() {
  return (
    <>
      <header className="d-flex flex-column justify-content-center align-items-center text-white pt-5 mt-5">
        <img className='img' src="imgs/avataaars.png" alt="" />
        <h1>START REACT</h1>
        <div className="pt-3">
          <i className="icon fa-solid fa-star fa-2x position-relative">
            <div className="lines">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
          </i>
        </div>
        <h4 className='pt-4'>Graphic Artist - Web Designer - Illustrator</h4>
      </header>
    </>
  );
}
