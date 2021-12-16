import "./topnav.scss"
import { Person, Mail } from "@material-ui/icons"
export default function Topnav({setMenuOpen, menuOpen} ) {
    return (
        <div className={"topnav " + (menuOpen  && "active")}>
            < div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>#443434334344</span>

                    </div>

                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>Brian@gmail.com</span>

                    </div>           
                    </div>

                <div className="right">
<div className="hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
    <span className="line1"></span>
    <span className="line2"></span>
    <span className="line3"></span>
</div>
                </div>

            </div>
        </div>
    )
}