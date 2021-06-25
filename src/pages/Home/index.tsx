import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/img/illustration.svg';
import logoImg from '../../assets/img/logo.svg';
import googleIconImg from '../../assets/img/google-icon.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import '../../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            alert('Room does not exists');
            return;
        }

        history.push(`rooms/${roomCode}`);
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google logo" />
                        Create your room with Google
                    </button>
                    <div className="separator">or join a room</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Type room code"
                            onChange={e => setRoomCode(e.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Join room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}