# Fill Properties

```ts
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
```