import { fill, stroke } from '../canvas';
import {
    IPolynomialProps,
    IRectProps,
    ICircleProps,
    ILineProps,
} from '../../interfaces';

/**
 * Draw a line.
 */
export const line = (props: ILineProps, ctx: CanvasRenderingContext2D) => {

    const { x1, y1, x2, y2 } = props;

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke();
    }

    ctx.restore();
};

/**
 * Get Path2D of a line, and optionally draw it.
 */
export const linePath = (props: ILineProps, ctx?: CanvasRenderingContext2D) : Path2D => {

    const { x1, y1, x2, y2 } = props;

    const path = new Path2D();

    path.moveTo(x1, y1);
    path.lineTo(x2, y2);

    if(!ctx) return path;

    ctx.save();

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke(path);
    }

    ctx.restore();

    return path;
};

/**
 * Draw a rectangle, including a rectangle with rounded corners.
 * Can also "clear" a rectangular space.
 */
export const rect = (props: IRectProps, ctx: CanvasRenderingContext2D) => {

    const { x, y, w, h} = props;

    if(props.clear){
        ctx.clearRect(x, y, w, h);
        return;
    }

    if(props.radii){
        ctx.save();

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

        ctx.restore();
        return;
    }

    ctx.save();

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fillRect(x, y, w, h);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.strokeRect(x, y, w, h);
    }

    ctx.restore();
};

/**
 * Get Path2D of a rectangle, and optionally draw it.
 */
export const rectPath = (props: IRectProps, ctx?: CanvasRenderingContext2D) : Path2D => {

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

    ctx.save();

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fill(path);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke(path);
    }

    ctx.restore();

    return path;
};

/**
 * Used to draw polynomials like triangles etc.
 */
export const polynomial = (props: IPolynomialProps, ctx: CanvasRenderingContext2D) => {

    const { points } = props;

    ctx.save();

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

    ctx.restore();
};

/**
 * Used to draw polynomials like triangles etc.
 */
export const polynomialPath = (props: IPolynomialProps, ctx?: CanvasRenderingContext2D) : Path2D => {

    const { points } = props;

    const path = new Path2D();

    for(let i= 0; i<points.length; i++) {
        const point = points[i];

        if(i === 0){
            path.moveTo(point[0], point[1]);
        }
        else{
            path.lineTo(point[0], point[1]);
        }
    }

    if(props.closed){
        path.closePath();
    }

    if(!ctx) return path;

    ctx.save();

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fill(path);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke(path);
    }

    ctx.restore();

    return path;
};

/**
 * Draw a circle, or it's segment.
 */
export const circle = (props: ICircleProps, ctx: CanvasRenderingContext2D) => {
    const { cx, cy,r} = props;

    const startAngleRad = props.startAngleRad === undefined ? 0 : props.startAngleRad;
    const endAngleRad = props.endAngleRad === undefined ? 2 * Math.PI : props.endAngleRad;

    ctx.save();

    ctx.beginPath();

    fill(props, ctx);
    stroke(props, ctx);

    ctx.arc(cx, cy, r, startAngleRad, endAngleRad, props.counterclockwise);

    if(props.fillStyle){
        ctx.fill();
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke();
    }

    ctx.restore();
};

/**
 * Get Path2D of a circle or its segment, and optionally draw it.
 */
export const circlePath = (props: ICircleProps, ctx?: CanvasRenderingContext2D) : Path2D => {
    const { cx, cy, r } = props;

    const startAngleRad = props.startAngleRad === undefined ? 0 : props.startAngleRad;
    const endAngleRad = props.endAngleRad === undefined ? 2 * Math.PI : props.endAngleRad;

    const path = new Path2D();

    path.arc(cx, cy, r, startAngleRad, endAngleRad, props.counterclockwise);

    if(!ctx) return path;

    ctx.save();

    if(props.fillStyle){
        fill(props, ctx);
        ctx.fill(path);
    }

    if(props.strokeStyle){
        stroke(props, ctx);
        ctx.stroke(path);
    }

    ctx.restore();

    return path;
};
