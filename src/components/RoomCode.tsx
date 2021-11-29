
import React from 'react';
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipboard():void {
        navigator.clipboard.writeText(props.code)
    }

    return (
        //erro no onclick
        <>
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar codigo da sala" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
        </>
    )


}