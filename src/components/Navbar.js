// Navbar.js
function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__S1">
                <h1 className="Navbar__S1__title">Udemy</h1>
            </div>
            <div className="Navbar__S2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Search for anything here. Tech, Business, Art..." />
            </div>
            <div className="Navbar__S3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="Navbar__S4">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}

export default Navbar;
