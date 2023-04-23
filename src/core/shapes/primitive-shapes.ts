import { fill, stroke } from '../canvas';

export interface IRectProps {
    x: number;
    y: number;
    w: number;
    h: number;
    radii?: number|number[]; // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect

    clear?: boolean;
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
}

export const rect = (ctx: CanvasRenderingContext2D, props: IRectProps) => {

    const { x, y, w, h} = props;

    if(props.clear){
        ctx.clearRect(x, y, w, h);
        return;
    }

    if(props.radii){
        fill(ctx, props);
        stroke(ctx, props);

        ctx.beginPath();

        // @ts-ignore
        ctx.roundRect(x, y, w, h, props.radii)
        if(props.fillStyle){
            ctx.fill();
        }

        if(props.strokeStyle){
            ctx.stroke();
        }
        return;
    }

    if(props.fillStyle){
        fill(ctx, props);
        ctx.fillRect(x, y, w, h);
    }

    if(props.strokeStyle){
        stroke(ctx, props);
        ctx.strokeRect(x, y, w, h);
    }
};