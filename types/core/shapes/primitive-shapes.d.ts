import { IPolynomialProps, IRectProps, ICircleProps, ILineProps } from '../../interfaces';
/**
 * Draw a line.
 */
export declare const line: (props: ILineProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Get Path2D of a line, and optionally draw it.
 */
export declare const linePath: (props: ILineProps, ctx?: CanvasRenderingContext2D) => Path2D;
/**
 * Draw a rectangle, including a rectangle with rounded corners.
 * Can also "clear" a rectangular space.
 */
export declare const rect: (props: IRectProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Get Path2D of a rectangle, and optionally draw it.
 */
export declare const rectPath: (props: IRectProps, ctx?: CanvasRenderingContext2D) => Path2D;
/**
 * Used to draw polynomials like triangles etc.
 */
export declare const polynomial: (props: IPolynomialProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Used to draw polynomials like triangles etc.
 */
export declare const polynomialPath: (props: IPolynomialProps, ctx?: CanvasRenderingContext2D) => Path2D;
/**
 * Draw a circle, or it's segment.
 */
export declare const circle: (props: ICircleProps, ctx: CanvasRenderingContext2D) => void;
/**
 * Get Path2D of a circle or its segment, and optionally draw it.
 */
export declare const circlePath: (props: ICircleProps, ctx?: CanvasRenderingContext2D) => Path2D;
