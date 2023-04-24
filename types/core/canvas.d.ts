import { ICanvas, IFillProps, IStrokeProps } from '../interfaces';
export declare const setContextProps: (props: [string, string | number | undefined][], ctx: CanvasRenderingContext2D) => void;
export declare const canvas: (props: ICanvas) => {
    ctx: CanvasRenderingContext2D | null;
    $canvas: HTMLCanvasElement;
};
export declare const stroke: (props: IStrokeProps, ctx: CanvasRenderingContext2D) => void;
export declare const fill: (props: IFillProps, ctx: CanvasRenderingContext2D) => void;
