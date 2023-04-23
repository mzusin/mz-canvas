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
    ariaLabel?: string;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles
 */
export interface IStrokeProps {

    // Line color
    strokeStyle?: string;

    // Sets the width of lines drawn in the future.
    lineWidth?: number;

    // Sets the appearance of the ends of lines.
    // "butt", "round", "square". The default is "butt".
    lineCap?: string;

    // Sets the appearance of the "corners" where lines meet.
    // "round", "bevel", and "miter". The default is "miter".
    lineJoin?: string;

    // Establishes a limit on the miter when two lines join at a sharp angle,
    // to let you control how thick the junction becomes.
    // Zero, negative, Infinity, and NaN values are ignored.
    // The default value is 10.0.
    miterLimit?: number;

    // Used in setLineDash() that defines the current line dash pattern.
    // For example, [5, 15]
    lineDashSegments: number[];

    // Specifies where to start a dash array on a line.
    // The default value is 0.
    lineDashOffset?: number;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#gradients
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#patterns
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows
 */
export interface IFillProps {
    fillStyle?: string|CanvasGradient|CanvasPattern;

    // How far the shadow should extend from the object in the X direction.
    // This value isn't affected by the transformation matrix.
    // Use negative values to cause the shadow to extend the left,
    // and positive values to cause the shadow to extend to the right.
    // The default is 0.
    shadowOffsetX?: number;

    // How far the shadow should extend from the object in the Y direction.
    // This value isn't affected by the transformation matrix.
    // Use negative values to cause the shadow to extend up,
    // and positive values to cause the shadow to extend down.
    // The default is 0.
    shadowOffsetY?: number;

    // Indicates the size of the blurring effect;
    // this value doesn't correspond to a number of pixels
    // and is not affected by the current transformation matrix.
    // The default value is 0.
    shadowBlur?: number;

    // A standard CSS color value indicating the color of the shadow effect;
    // by default, it is fully-transparent black.
    shadowColor?: string;
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

