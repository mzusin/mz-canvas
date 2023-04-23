import { fill, stroke } from '../canvas';
import { IRectPathProps, IPathProps, IRectProps } from '../../interfaces';

/**
 * Draw a rectangle including rounded.
 * Can also "clear the rect".
 */
export const rect = (props: IRectProps, ctx: CanvasRenderingContext2D) => {

    const { x, y, w, h} = props;

    if(props.clear){
        ctx.clearRect(x, y, w, h);
        return;
    }

    if(props.radii){
        fill(props, ctx);
        stroke(props, ctx);

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
        fill(props, ctx);
        ctx.fillRect(x, y, w, h);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.strokeRect(x, y, w, h);
    }
};

/**
 * Used to draw polynomials like triangles etc.
 */
export const path = (props: IPathProps, ctx: CanvasRenderingContext2D) => {

    const { points } = props;

    fill(props, ctx);
    stroke(props, ctx);

    ctx.beginPath();

    for(let i= 0; i<points.length; i++) {
        const point = points[i];

        if(i === 0){
            ctx.moveTo(point[0], point[1]);
        }
        else{
            ctx.lineTo(point[0], point[1]);
        }
    }

    if(props.closed){
        ctx.closePath();
    }

    if(props.fillStyle){
        ctx.fill();
    }

    if(props.strokeStyle){
        ctx.stroke();
    }

};

/**
 * Get Path2D of rectangle, and optionally draw it.
 */
export const rectPath = (props: IRectPathProps, ctx?: CanvasRenderingContext2D) : Path2D => {

    const { x, y, w, h} = props;

    const path = new Path2D();

    if(props.radii){
        // @ts-ignore
        path.roundRect(x, y, w, h, props.radii)
    }
    else{
        path.rect(x, y, w, h);
    }

    if(!ctx) return path;

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fill(path);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke(path);
    }

    return path;
};
