import { Link, useNavigate } from 'react-router-dom';

import illustrationimg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';

import '../styles/auth.scss'

import { Button } from '../components/button';

export function NewRoom() {
 
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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            entrar na sala
                        </Button>
                        <p>
                            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}
