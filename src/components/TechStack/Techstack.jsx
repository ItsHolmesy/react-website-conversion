import './Techstack.scss';
import TechIcon from "./TechIcon";
import { TECH_INFO } from './techStackData';

export default function TechStack() {
    return (
        <div>
            <section id="section-tech-stack">
                <div class='flex-row'>
                    <h2>Tech Stack</h2>
                </div>
                <div class='flex-row'>
                    {TECH_INFO.map((techItem) => (
                        <TechIcon key={techItem.title} {...techItem} />
                    ))}
                </div>
            </section>
        </div>
    );
}