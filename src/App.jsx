import { useState } from "react";



function App() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setData] = useState("");

    const submitDetails = () => {
        console.log("userName: userName");
        console.log("email: email");
        console.log("phoneNumber: phoneNumber");
        console.log("date: date");

    };
    return (
        <>
        <div className="model-container">
            <h1>
                User Detais Form
            </h1>
            <button
            type="button"
            className="btn bth-primary"
            data-bs-toggle="model"
            data-bs-target="#exampleModel"
            >
            One Form

            </button>

        </div>
        <div 
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exammpleModalLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <h1 className="modal-tital fs-5" id="exampleModalLabel">
                            Fill Details

                        </h1>

                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            submitDetails();
                        }}
                        >
                            <div className="input-group">
                                <label htmlFor="userName">userName</label>
                                <br />
                                <input type="text"
                                id="userName" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email Addres</label><br />
                                <input type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="input-group">
                                <label htmlFor="phoneNumber">Phone Number</label><br />
                                <input type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label><br />
                                <input type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="input-group">
                                <label htmlFor="phoneNumber">Phone Number</label><br />
                                <input type="text" 
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="input-group">
                                <label htmlFor="date">Date of Birth</label><br />
                                <input type="date" 
                                id="date"
                                value={date}
                                onChange={(e) => setData(e.target.value)}
                                required
                                
                                />

                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                
                                >
                                    Submit

                                </button>

                            </div>


                        </form>
                    

                    </div>

                </div>

            </div>

        </div>
        
        </>
    )
}
export default App;