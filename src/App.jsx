import { useState } from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import Testamonials from "./components/Testamonials/Testamonials";
import WorkExperience from "./components/Work Experience/workexperience";
import TechStack from './components/TechStack/Techstack';
import TabButton from "./components/Buttons/TabButton";
import Tabs from "./components/Buttons/Tabs";


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
                    <Tabs buttons={
                        <div class='flex-row'>
                                                <TabButton
                                                    isSelected={selectedTopic === 'intro'}
                                                    onSelect={() => handleSelect('intro')}
                                                >
                                                    Intro
                                                </TabButton>
                                                <TabButton
                                                    isSelected={selectedTopic === 'references'}
                                                    onSelect={() => handleSelect('references')}
                                                >
                                                    References
                                                </TabButton>
                                                <TabButton
                                                    isSelected={selectedTopic === 'work-experience'}
                                                    onSelect={() => handleSelect('work-experience')}
                                                >
                                                    Work Experience
                                                </TabButton>
                                                <TabButton
                                                    isSelected={selectedTopic === 'tech-stack'}
                                                    onSelect={() => handleSelect('tech-stack')}
                                                >
                                                    Tech Stack
                                                </TabButton>
                                            </div>
                    }>
                        {topicContentMapping[selectedTopic]}
                    </Tabs>
                    <menu>

                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;