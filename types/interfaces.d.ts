import { Vector2 } from 'mz-math/types/types';
export interface ICanvas {
    width: number;
    height: number;
    id?: string;
    classes?: string;
    style?: string;
    title?: string;
    tabindex?: number;
    role?: string;
    fallback?: string;
    ariaLabel?: string;
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles
 */
export interface IStrokeProps {
    strokeStyle?: string;
    lineWidth?: number;
    lineCap?: string;
    lineJoin?: string;
    miterLimit?: number;
    lineDashSegments?: number[];
    lineDashOffset?: number;
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#gradients
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#patterns
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows
 */
export interface IFillProps {
    fillStyle?: string | CanvasGradient | CanvasPattern;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowBlur?: number;
    shadowColor?: string;
}
export interface IRect {
    x: number;
    y: number;
    w: number;
    h: number;
    radii?: number | number[];
}
export interface IRectProps extends IRect, IStrokeProps, IFillProps {
    clear?: boolean;
}
export interface IPathProps extends IStrokeProps, IFillProps {
    points: Vector2[];
    closed?: boolean;
}
export interface IRectPathProps extends IRect, IStrokeProps, IFillProps {
}
export interface ICircle {
    cx: number;
    cy: number;
    r: number;
    startAngleRad?: number;
    endAngleRad?: number;
    counterclockwise?: boolean;
}
export interface ICircleProps extends ICircle, IStrokeProps, IFillProps {
}
export interface ICirclePathProps extends ICircle, IStrokeProps, IFillProps {
}
export interface ITextProps extends IStrokeProps, IFillProps {
    text: string;
    x: number;
    y: number;
    maxWidth?: number;
    font?: string;
    textAlign?: string;
    textBaseline?: string;
    direction?: string;
}
