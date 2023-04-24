# Stroke Properties

```ts
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
    lineDashSegments?: number[];

    // Specifies where to start a dash array on a line.
    // The default value is 0.
    lineDashOffset?: number;
}
```