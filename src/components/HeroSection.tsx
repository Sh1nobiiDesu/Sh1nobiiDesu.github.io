import { type ReactNode } from "react";
import "./HeroSection.css";
import "../App.css";

interface Props {
    children : ReactNode
}

function HeroSection({children} : Props) {
    return (
        <div className="hero-container">
            {children}
        </div>
    );
}

export default HeroSection;