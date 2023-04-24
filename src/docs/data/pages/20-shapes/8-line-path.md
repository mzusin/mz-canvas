# Line Path

The **linePath()** function is used to draw and return a [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) line.

```ts
import { linePath } from 'mz-canvas';

const line: Path2D = linePath({
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300,
});

// Do something with Path2D object
console.log(line);
```

You can also create a Path2D object and draw it right away:

```ts
import { canvas, rectPath } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 600,
    height: 600
});

const line: Path2D = rectPath({
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300,
    strokeStyle: '#0f2b38',
    lineWidth: 15,
}, ctx);

// Do something with Path2D object
console.log(line);

document.body.append($canvas);
```

The **line()** implements the following interfaces:

```ts
export interface ILine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export interface ILineProps extends ILine, IStrokeProps {}

export const linePath: (props: ILineProps, ctx?: CanvasRenderingContext2D) => Path2D;
```
