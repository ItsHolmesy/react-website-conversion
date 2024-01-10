export default function TechIcon({ icon, stackname }) {
    return (
        <div class="techstack">
            <img src={icon}></img>
            <p>{stackname}</p>
        </div>
    );
}