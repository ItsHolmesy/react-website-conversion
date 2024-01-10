import TechIcon from "./TechIcon";
import { TECH_INFO } from './techStackData';

export default function TechStack() {
    return (
        <div class='techstack'>
            <div class='row'>
                {TECH_INFO.map((techItem) => (
                    <TechIcon key={techItem.title} {...techItem} />
                ))}
            </div>
        </div>
    );
}