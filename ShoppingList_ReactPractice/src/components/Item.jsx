export default function Item({ item, onDeleteItem, onPickedItem }) {
    return (
        <li className={`item ${item.picked ? 'picked' : ''}`}>
            <input
                type='checkbox'
                name='picked'
                id='picked'
                checked={item.picked}
                onClick={() => onPickedItem(item.id)}
            />
            {item.name} ({item.quantity}){' '}
            <button
                className='deleteButton'
                onClick={() => onDeleteItem(item.id)}
            >
                ❌
            </button>
        </li>
    );
}
