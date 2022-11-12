import React from 'react';

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <h2 className="pb-3">LOCATION</h2>
              <h5>2215 John Daniel Drive</h5>
              <h5> Clark, MO 65243</h5>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-dribbble"></i>
            </div>
            <div className="col-md-4">
              <h2 className="pb-3">ABOUT FREELANCER</h2>
              <h5 className="px-5">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </h5>
            </div>
          </div>
        </div>
      </footer>
      <div className="second-footer text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
