import { Link } from 'react-router-dom';

import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';

import { Button } from '../components/Button';
// import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
    // const { user } = useAuth();

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
                    <form>
                        <input
                            type="text"
                            placeholder="Room name"
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