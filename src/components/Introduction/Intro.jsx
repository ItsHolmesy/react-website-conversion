import './Intro.css'

export default function Intro() {
    return (
        <div>
            <section class="section-intro">
                <div class="row">
                    <h2>About Me</h2>
                    <p class="long-copy">
                        Hi, Welcome to this blend of portfolio app and resume! My name is Matthew Holmes, an amateur/entry level web-developer looking for a foot in the door with an entry-level job. Particularly with web development at the moment.
                        This website serves a two-fold purpose, showcasing my knowledge of Web Development whilst also acting as a working resume including reference contacts and my work history. 
                    </p>
                </div>

                <div class="row">
                    <div class="flex-column box">
                        <i class="ion-information-circled icon-big"></i>
                        <h3>What programming experience do I have?</h3>
                        <p>
                            So far, this React App/Website will serve to demonstrate my understanding and knowledge of HTML, CSS, Javascript, React, and JSON. A clearer demonstration of my Javascript knowledge can be found within the Dice Game, accessible via the navbar!
                        </p>
                    </div>
                    <div class="flex-column box">
                        <i class="ion-information-circled icon-big"></i>
                        <h3>Where do I currently work?</h3>
                        <p>
                            Currently I work with Telstra as an Emergency 000 Call Operator, taking and directing emergency calls nationally to Emergency Services (Police, Fire and Ambulance).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}