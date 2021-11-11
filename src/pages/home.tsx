import illustrationimg from '../assets/images/illustration.svg';
import logoimg from '../assets/images/logo.svg';
import googleiconimg from '../assets/images/google-icon.svg';

export function Home(){
    return (
        <div>
            <aside>
                <img src={illustrationimg} alt="Imagem simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoimg} alt="letmeask" />
                    <button>
                        <img src={googleiconimg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}