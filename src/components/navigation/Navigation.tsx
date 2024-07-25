import { Link } from "react-router-dom"
import style from "./Navigation.module.scss"

export const Navigation = () => {
    return (
        <nav>
            <span>
                <Link to="/">Home</Link>
                <Link to="/demo">Demo</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}