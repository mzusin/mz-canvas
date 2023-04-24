# Polynomial Path

The **polynomialPath()** function is used to draw and return a [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) shape of a polynomial.

```ts
import { canvas, polynomialPath } from 'mz-canvas';

const polynomial: Path2D = polynomialPath({
    points: [[75, 50], [100, 75], [100, 25]],
    closed: true,
});

// Do something with Path2D object
console.log(polynomial);
```
You can also create a Path2D object and draw it right away:

```ts
import { canvas, polynomialPath } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

const polynomial: Path2D = polynomialPath({
    points: [[75, 50], [100, 75], [100, 25]],
    closed: true,

    fillStyle: '#efefef',
    strokeStyle: '#163a86',
    lineWidth: 2,
}, ctx);

// Do something with Path2D object
console.log(polynomial);

document.body.append($canvas);
```

The **polynomial()** implements the following interfaces:

```ts
export interface IPolynomialProps extends IStrokeProps, IFillProps {
    points: Vector2[];
    closed?: boolean;
}

export const polynomialPath: (props: IPolynomialProps, ctx?: CanvasRenderingContext2D) => Path2D;
```