import { Link } from "react-router";
import Logo from "../../public/img.png"
const Head = () => {
    return (
        <>
            <div className="">
                <header className="flex justify-around bg-blue-500">
                    <div className="">
                        <img className="h-12" src={Logo} alt="" />
                    </div>
                    <nav className="navItems">
                        <ul className="flex py-2 gap-5">
                            <Link to="/">
                            <li>Home</li>
                            </Link>
                            <Link to="/about">
                            <li>About</li>
                            </Link>
                            <Link to="/contact">
                            <li>Contact</li>
                            </Link>
                            <Link to="/insta">
                            <li>Instamart</li>
                            </Link>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
};

export default Head;