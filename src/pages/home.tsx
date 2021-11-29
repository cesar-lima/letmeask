import { Link, useNavigate } from 'react-router-dom';

import { auth, database, firebase } from '../services/firebase';

import illustrationimg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleiconimg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import { Button } from '../components/button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';

export function Home(){
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode ] = useState('');

    async function handleCreateRoom(){
        if (!user) {
            await signInWithGoogle();
        }
        navigate('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim()  === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()){
            alert('room does not exists.');
            return;
        }

        navigate(`/rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationimg} alt="Imagem simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoimg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleiconimg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}