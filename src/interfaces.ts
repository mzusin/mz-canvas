import { Vector2 } from 'mz-math/types/types';

export interface ICanvas {
    width: number;
    height: number;

    id?: string;
    classes?: string;
    style?: string;
    title?: string;
    tabindex?: number;

    // accessibility --------
    role?: string;
    fallback?: string;
}

export interface IStrokeProps {
    strokeStyle?: string;
    lineWidth?: number;
}

export interface IFillProps {
    fillStyle?: string;
}

export interface IRect {
    x: number;
    y: number;
    w: number;
    h: number;
    radii?: number|number[]; // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect
}

export interface IRectProps extends IRect, IStrokeProps, IFillProps {
    clear?: boolean;
}

export interface IPathProps extends IStrokeProps, IFillProps {
    points: Vector2[];
    closed?: boolean;
}

export interface IRectPathProps extends IRect, IStrokeProps, IFillProps { }

export interface ICircle {
    cx: number;
    cy: number;
    r: number;
    startAngleRad?: number;
    endAngleRad?: number;
    counterclockwise?: boolean;
}

export interface ICircleProps extends ICircle, IStrokeProps, IFillProps { }

export interface ICirclePathProps extends ICircle, IStrokeProps, IFillProps { }

