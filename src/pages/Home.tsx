import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
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
                    <button className="create-room">
                        <img src={googleIconImg} alt="Google logo" />
                        Create your room with Google
                    </button>
                    <div className="separator">or join a room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Type room code"
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