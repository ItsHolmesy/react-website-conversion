import { useState } from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import Testamonials from "./components/Testamonials/Testamonials";
import WorkExperience from "./components/Work Experience/workexperience";
import TechStack from './components/TechStack/Techstack';
import TabButton from "./components/Buttons/TabButton";


function App() {
    const [ selectedTopic, setSelectedTopic ] = useState(<Intro />);

    const topicContentMapping = {
        'intro': <Intro />,
        'references': <Testamonials />,
        'work-experience': <WorkExperience />,
        'tech-stack': <TechStack />
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            <Header />
            <main class='main-content'>
                <section id="sections">

                </section>
            </main>
        </div>
    );
}

export default App;