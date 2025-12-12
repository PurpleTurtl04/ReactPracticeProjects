import LikeButton from './like-button';

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <header title='Develop. Preview. Ship.' />
            <ul>
                {names.map((name) => (
                    <li key='{name}'>{name}</li>
                ))}
            </ul>

            <LikeButton />
        </div>
    );
}
