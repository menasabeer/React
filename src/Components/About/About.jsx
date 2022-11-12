import React from 'react';

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title text-center my-5">
            <h2>ABOUT</h2>
            <div className="pt-1">
              <i className="icon fa-solid fa-star fa-2x position-relative">
                <div className="lines">
                  <div className="left-side"></div>
                  <div className="right-side"></div>
                </div>
              </i>
            </div>
          </div>
          <div className="row  px-5 mx-5">
            <div className="col-md-6">
              <div className="right-side">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-side">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
