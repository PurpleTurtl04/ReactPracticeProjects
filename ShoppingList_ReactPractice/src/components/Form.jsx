import { useState } from 'react';

export default function Form({ onAddItem }) {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (itemName.length === 0) return;

        const id = crypto.randomUUID();

        const newItem = {
            id,
            name: itemName,
            quantity,
            picked: false,
        };

        onAddItem(newItem);
        setItemName('');
        setQuantity(1);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>What do you need?</h3>
            <div className='inputFields'>
                <input
                    type='text'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <select
                    name='quantity'
                    id='quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <button>Add</button>
            </div>
        </form>
    );
}
