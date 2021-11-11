type buttonprops = {
    text: string;
}

export function button (props: buttonprops) {
    <button>{props.text || 'default'}</button>
}