export default function Reference({  image, title, location, email, phone, refname }) {
    return (
        <div class='references'>
            <blockquote>
                <ul>
                    <li>{title}</li>
                    <li>{location}</li>        
                    <li>{email}</li>
                    <li>{phone}</li>
                    <cite><img src={image} alt={title} />{refname}</cite>
                </ul>
            </blockquote>
        </div>
    );
}