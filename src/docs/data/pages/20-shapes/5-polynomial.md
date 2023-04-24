# Polynomial

The **polynomial()** function is used to draw any polynomial shape such as triangle, quadrilateral, etc.

```ts
import { canvas, polynomial } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

// draw a triangle ------------------------
polynomial({
    points: [[75, 50], [100, 75], [100, 25]],
    closed: true,

    fillStyle: '#efefef',
    strokeStyle: '#163a86',
    lineWidth: 2,
}, ctx);

document.body.append($canvas);
```

The **polynomial()** implements the following interfaces:

```ts
export interface IPolynomialProps extends IStrokeProps, IFillProps {
    points: Vector2[];
    closed?: boolean;
}

export const polynomial: (props: IPolynomialProps, ctx: CanvasRenderingContext2D) => void;
```