import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'

import { auth, firebase } from '../services/firebase';

import illustrationimg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleiconimg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import { Button } from '../components/button';
import { AuthContext } from '../App';

export function Home(){
    const navigate = useNavigate();

    function handleCreateRoom(){
        const provider = new firebase.auth.GoogleAuthProvider();
        const { signInWithGoogle } = useContext(AuthContext)

        auth.signInWithPopup(provider).then(result => {
            navigate('/rooms/new');
        })
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
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
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