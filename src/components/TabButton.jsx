export default function TabButton({ children, onSelect, isSelected }) {
    return (
    <li class='btn-box'>
        <button class='sitenav' className={isSelected ? 'active' : undefined} style={{ background: '#f0f'}} onClick={onSelect}>
            {children}
        </button>
    </li>
    );
}