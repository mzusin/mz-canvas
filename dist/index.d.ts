declare module 'mz-canvas' {

    import { Vector2 } from 'mz-math';

    export interface ICanvas {
        width: number | string;
        height: number | string;
        id?: string;
        classes?: string;
        style?: string;
        title?: string;
        tabindex?: number;
        role?: string;
        fallback?: string;
        ariaLabel?: string;
    }

    export interface IStrokeProps {
        strokeStyle?: string;
        lineWidth?: number;
        lineCap?: string;
        lineJoin?: string;
        miterLimit?: number;
        lineDashSegments?: number[];
        lineDashOffset?: number;
    }

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

    export interface IPolynomialProps extends IStrokeProps, IFillProps {
        points: Vector2[];
        closed?: boolean;
    }

    export interface ICircle {
        cx: number;
        cy: number;
        r: number;
        startAngleRad?: number;
        endAngleRad?: number;
        counterclockwise?: boolean;
    }

    export interface ICircleProps extends ICircle, IStrokeProps, IFillProps { }

    export interface ILine {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    export interface ILineProps extends ILine, IStrokeProps {}

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

    export const setContextProps: (props: [string, string | number | undefined][], ctx: CanvasRenderingContext2D) => void;
    export const setCanvasSize: ($canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null, props: ICanvas) => void;

    export const canvas: (props: ICanvas) => {
        ctx: CanvasRenderingContext2D | null;
        $canvas: HTMLCanvasElement;
    };

    export const stroke: (props: IStrokeProps, ctx: CanvasRenderingContext2D) => void;
    export const fill: (props: IFillProps, ctx: CanvasRenderingContext2D) => void;

    export const line: (props: ILineProps, ctx: CanvasRenderingContext2D) => void;
    export const linePath: (props: ILineProps, ctx?: CanvasRenderingContext2D) => Path2D;
    export const rect: (props: IRectProps, ctx: CanvasRenderingContext2D) => void;
    export const rectPath: (props: IRectProps, ctx?: CanvasRenderingContext2D) => Path2D;
    export const polynomial: (props: IPolynomialProps, ctx: CanvasRenderingContext2D) => void;
    export const polynomialPath: (props: IPolynomialProps, ctx?: CanvasRenderingContext2D) => Path2D;
    export const circle: (props: ICircleProps, ctx: CanvasRenderingContext2D) => void;
    export const circlePath: (props: ICircleProps, ctx?: CanvasRenderingContext2D) => Path2D;
    export const text: (props: ITextProps, ctx: CanvasRenderingContext2D) => void;
}