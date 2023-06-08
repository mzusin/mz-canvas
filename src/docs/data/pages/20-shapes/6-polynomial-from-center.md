# Polynomial defined by a central point

The **polynomialFromCenter()** is a function that draws a polygon on a canvas (triangle, rectangle, etc.). The polygon is defined by a center point, a radius, and the number of sides. It also accepts additional properties for styling such as fill color, stroke color, rotation, and more.

```ts
import { canvas, polynomialFromCenter } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 300,
    height: 300
});

// draw a rotated rectangle
polynomialFromCenter({
    cx: 150,
    cy: 150,
    r: 50,
    sides: 4,
    rotation: Math.PI / 180 * 55, // 55 degrees

    fillStyle: '#efefef',
    strokeStyle: '#163a86',
    lineWidth: 2,
}, ctx);

document.body.append($canvas);
```

The **polynomialFromCenter()** implements the following interfaces:

```ts
export interface IPolynomialFromCenterProps extends IStrokeProps, IFillProps {
    cx: number;
    cy: number;
    r: number;
    sides: number;
    rotation?: number;
}

export const polynomialFromCenter: (props: IPolynomialFromCenterProps, ctx: CanvasRenderingContext2D) => void;
```