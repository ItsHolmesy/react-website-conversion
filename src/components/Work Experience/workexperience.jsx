import './workexperience.scss';



import WorkPlaces from './workplaces';

export default function WorkExperience() {
    return (
        <div>
            <section id="section-work-experience">
                <div class="flex-row">
                    <h2>My Experience</h2>
                </div>
                <div class="flex-row">
                    <WorkPlaces />
                </div>
            </section>
        </div>

    );
}