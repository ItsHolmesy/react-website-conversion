import './Testamonials.css'
import { JOB_REFERENCES } from './referencesData';
import Reference from './References';

export default function Testamonials() {
    return (
        <div>
            <section id="section-references-testamonials">
                <div class="row">
                    <h2>My References</h2>
                </div>
                <div class="row">
                    {JOB_REFERENCES.map((referenceItem) => (
                        <Reference key={referenceItem.title} {...referenceItem} />
                    ))}
                </div>
            </section>
        </div>
    );
}