import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");

  const modalRef = useRef(null);

  const submitDetails = () => {
    console.log("userName:", userName);
    console.log("email:", email);
    console.log("phoneNumber:", phoneNumber);
    console.log("date:", date);
    setShowModal(false);
  };

  // ✅ Detect click outside modal (to close it)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <>
      <div className="modal-container text-center mt-5" id="root">
        <h1>User Details Form</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Open Form
        </button>
      </div>

      {/* ✅ Conditionally render modal so it's removed when closed */}
      {showModal && (
        <div className="modal-overlay modal">
          <div className="modal-dialog" ref={modalRef}>
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h1 className="modal-title fs-5">Fill Details</h1>
              </div>

              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitDetails();
                  }}
                >
                  <div className="input-group mb-3">
                    <label htmlFor="username">Username</label> <br />
                    <input
                      id="username"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group mb-3">
                    <label htmlFor="email">Email Address</label> <br />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group mb-3">
                    <label htmlFor="phone">Phone Number</label> <br />
                    <input
                      id="phone"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group mb-3">
                    <label htmlFor="dob">Date of Birth</label> <br />
                    <input
                      id="dob"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="modal-footer justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;