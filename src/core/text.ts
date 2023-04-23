import { ITextProps } from '../interfaces';
import { fill, setContextProps, stroke } from './canvas';

export const text = (props: ITextProps, ctx: CanvasRenderingContext2D) => {

    const { text, x, y } = props;

    setContextProps([
        ['font', props.font],
        ['textAlign', props.textAlign],
        ['textBaseline', props.textBaseline],
        ['direction', props.direction],
    ],ctx);

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fillText(text, x, y, props.maxWidth);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.strokeText(text, x, y, props.maxWidth);
    }
};