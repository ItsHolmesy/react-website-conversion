import { useState } from "react";

import Header from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import Testamonials from "./components/Testamonials/Testamonials";
import Footer from "./components/Footer/Footer";
import TabButton from "./components/TabButton";

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState(<Intro />);

    const topicContentMapping = {
        'intro': <Intro />,
        'references': <Testamonials />
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            <Header />
            <main class='menu'>
               <menu class='menu-nav'>
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
                </menu>
                {topicContentMapping[selectedTopic]}
            </main>
            <Footer />
        </div>
    );
}

export default App;