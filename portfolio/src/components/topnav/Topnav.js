import "./topnav.scss"
import { Person, Mail } from "@material-ui/icons"
export default function Topnav() {
    return (
        <div className="topnav">
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

                    </div>           </div>

                <div className="right">

                </div>

            </div>
        </div>
    )
}