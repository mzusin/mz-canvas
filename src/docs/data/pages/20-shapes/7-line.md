# Line

The **line()** function is used to draw a line shape.

```ts
import { canvas, line } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 600,
    height: 600
});

line({
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300,
    
    strokeStyle: '#0f2b38',
    lineWidth: 5,
}, ctx);

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

export const line: (props: ILineProps, ctx: CanvasRenderingContext2D) => void;
```

