declare const api: {
    line: (props: import("./interfaces").ILineProps, ctx: CanvasRenderingContext2D) => void;
    linePath: (props: import("./interfaces").ILineProps, ctx?: CanvasRenderingContext2D | undefined) => Path2D;
    rect: (props: import("./interfaces").IRectProps, ctx: CanvasRenderingContext2D) => void;
    rectPath: (props: import("./interfaces").IRectProps, ctx?: CanvasRenderingContext2D | undefined) => Path2D;
    polynomial: (props: import("./interfaces").IPathProps, ctx: CanvasRenderingContext2D) => void;
    polynomialPath: (props: import("./interfaces").IPathProps, ctx?: CanvasRenderingContext2D | undefined) => Path2D;
    circle: (props: import("./interfaces").ICircleProps, ctx: CanvasRenderingContext2D) => void;
    circlePath: (props: import("./interfaces").ICircleProps, ctx?: CanvasRenderingContext2D | undefined) => Path2D;
    setContextProps: (props: [string, string | number | undefined][], ctx: CanvasRenderingContext2D) => void;
    canvas: (props: import("./interfaces").ICanvas) => {
        ctx: CanvasRenderingContext2D | null;
        $canvas: HTMLCanvasElement;
    };
    stroke: (props: import("./interfaces").IStrokeProps, ctx: CanvasRenderingContext2D) => void;
    fill: (props: import("./interfaces").IFillProps, ctx: CanvasRenderingContext2D) => void;
};
declare global {
    interface Window {
        mzCanvas: typeof api;
    }
}
export * from './core/canvas';
export * from './core/shapes/primitive-shapes';
