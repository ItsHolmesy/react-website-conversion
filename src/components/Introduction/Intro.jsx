import './Intro.scss'

export default function Intro() {
    return (
        <>
            <section class="section-intro">
                <h2>About Me</h2>
                <div class="flex-row intro">
                    <p>
                        Hi, Welcome to this blend of portfolio app and resume! My name is Matthew Holmes, an amateur/entry level web-developer looking for a foot in the door with an entry-level job. Particularly with web development at the moment.
                        This website serves a two-fold purpose, showcasing my knowledge of Web Development whilst also acting as a working resume including reference contacts and my work history. 
                    </p>
                </div>

                <div class="flex-row">
                    <div class="text-box">
                        <i class="icon-intro gg-info"></i>
                        <h3>What programming experience do I have?</h3>
                        <p>
                            So far, this React App will serve to demonstrate my understanding and knowledge of HTML, CSS, Sass, Javascript, React, and JSON. A clearer demonstration of my Javascript knowledge can be found within the Dice Game, accessible via the navbar!
                        </p>
                    </div>
                    <div class="text-box">
                        <i class="icon-intro gg-info"></i>
                        <h3>Where do I currently work?</h3>
                        <p>
                            Currently I work with Telstra as a Supervisor/Operational Support Agent within 000, taking and directing emergency calls nationally to Emergency Services (Police, Fire and Ambulance), and managing the office floor in the absense of a team leader or manager.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}