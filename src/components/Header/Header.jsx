import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <div class="row">
                    <ul class="main-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="dicegame.html">Dice Game</a></li>
                    </ul>
                </div>
            </nav>
            <button id="dark-mode-toggle" class="dark-mode-toggle">
                
                
            </button>
            <div id="hero-text-box">
                <h1>Matthew Holmes</h1>
                <a class="btn btn-full" href="#contact-me">Get in Touch</a>
                <a class="btn btn-ghost" href="#work-experience">Work Experience!</a>
            </div>
        </header>
    );
}