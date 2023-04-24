import { IRectPathProps, IPathProps, IRectProps, ICircleProps, ICirclePathProps } from '../../interfaces';
/**
 * Draw a rectangle including rounded.
 * Can also "clear the rect".
 */
export declare const rect: (props: IRectProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Used to draw polynomials like triangles etc.
 */
export declare const path: (props: IPathProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Get Path2D of a rectangle, and optionally draw it.
 */
export declare const rectPath: (props: IRectPathProps, ctx?: CanvasRenderingContext2D) => Path2D;
/**
 * Draw a circle, or it's segment.
 */
export declare const circle: (props: ICircleProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Get Path2D of a circle or its segment, and optionally draw it.
 */
export declare const circlePath: (props: ICirclePathProps, ctx?: CanvasRenderingContext2D) => Path2D;
