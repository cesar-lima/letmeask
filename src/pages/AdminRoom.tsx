import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/button';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import '../styles/room.scss';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';


type RoomParams = {
    id: string;
}

export function AdminRoom() {
    //const { user } = useAuth();
    const navigate = useNavigate();
    const { id }  = useParams();
    const roomId = id  || '';
    const { title, questions } = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        navigate('/');
    }

    async function handleDeleteQuestion(questionId: string){
        if (window.confirm('tem certeza que deseja escluir essa pergunta')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span> {questions.length} pergunta(s)</span> }
                </div>
                
                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question 
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>

                        );
                    })} 
                </div>
            </main>
        </div>
    );
}

