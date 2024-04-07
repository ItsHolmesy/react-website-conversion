export default function Tabs({ children }) {
    return <>
        <menu>
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
        </menu>
        {children}
    </>
}