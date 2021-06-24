import { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        });

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration representing questions and answers" />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Ask your audience's questions in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Let me ask" />
                    <h2>Create new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Room name"
                            onChange={e => setNewRoom(e.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>
                        Do you want to join an existing room? <Link to="/">Click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}