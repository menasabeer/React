import React from 'react';

  var emailAlert = document.querySelector('.emailAlert');
  var emailInput = document.querySelector('.emailInput');

  // function rejexEmail() {
  //   alert('mena')
  //   var rejexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //   if (rejexForEmail.test(emailInput.value)) {
  //     emailInput.classList.add('is-valid');
  //     emailInput.classList.remove('is-invalid');
  //     emailAlert.classList.add('d-none');
  //   } else {
  //     emailInput.classList.add('is-invalid');
  //     emailInput.classList.remove('is-valid');
  //     emailAlert.classList.remove('d-none');
  //   }
  // };


export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="title text-center my-5">
            <h2>CONTACT ME</h2>
            <div className="pt-1">
              <i className="icon fa-solid fa-star fa-2x position-relative">
                <div className="lines">
                  <div className="left-side"></div>
                  <div className="right-side"></div>
                </div>
              </i>
            </div>
          </div>
          <div className="form d-flex flex-wrap justify-content-center">
            <div className="row w-50">
              <div className="col-md-12">
                <div className="form-floating m-3 w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Mena Saber"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating m-3 w-100">
                  <input
                    // onKeyUp={rejexEmail()}
                    type="email"
                    className="form-control emailInput"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                  <p className="emailAlert w-100 text-danger m-3 fw-bolder d-none">
                    Not a valid email address
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating m-3 w-100">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="01210120342"
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating m-3 w-100">
                  <textarea
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="write a message"
                  />
                  <label htmlFor="floatingInput">Message</label>
                </div>
              </div>
              <div className="col-md-12 m-3">
                <button className="btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
