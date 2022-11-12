import React from 'react';

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="title text-center my-5">
            <h2>PORTFOLIO</h2>
            <div className="pt-1">
              <i className="icon fa-solid fa-star fa-2x position-relative">
                <div className="lines">
                  <div className="left-side"></div>
                  <div className="right-side"></div>
                </div>
              </i>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/cabin.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/cake.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/circus.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/game.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/safe.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="img position-relative"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                <img
                  className="w-100 overflow-hidden "
                  src="imgs/submarine.png"
                  alt=""
                />
                <div className="layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>LOG CABIN</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/cabin.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal2"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>TASTY CAKE</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/cake.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal3"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>CIRCUS TENT</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/circus.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal4"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>CONTROLLER</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/game.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal5"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>LOCKED SAFE</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/safe.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade text-center"
            id="exampleModal6"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl ">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center">
                  <div className="title text-center ">
                    <h2>SUBMARINE</h2>
                    <div className="pt-1">
                      <i className="icon fa-solid fa-star fa-2x position-relative">
                        <div className="lines">
                          <div className="left-side"></div>
                          <div className="right-side"></div>
                        </div>
                      </i>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="w-75 overflow-hidden "
                    src="imgs/submarine.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    type="button"
                    className="btn-close2  btn mb-5 fs-5"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-x fs-6"></i> Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
