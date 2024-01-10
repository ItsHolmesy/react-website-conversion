export default function WorkPlaces({ image, title, location, tenure, description }) {
    return (
        <div>
            <div class="workplace-image"><img src={image} alt={title} /></div>
            <div class="workplace-info">
                <h3>{title}</h3>
                <ul>
                    <li>{location}</li>
                    <li>{tenure}</li>
                </ul>
                <p>{description}</p>
            </div>
        </div>
    );
}