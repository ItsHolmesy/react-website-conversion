import './Button.scss'

export default function TabButton({ children, onSelect, isSelected }) {
    return (
            <li>
                <button className={'btn btn-main ${isSelected ? "active" : undefined}'} onClick={onSelect}>
                    {children}
                </button>
            </li>
    );
}