# Rectangle

The **rect()** function is used to draw a rectangular shape.

```ts
import { canvas, rect } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

rect({
    x: 0,
    y: 0,
    w: 300,
    h: 300,
    fillStyle: '#366d8c',
    strokeStyle: '#0f2b38',
    lineWidth: 15,
}, ctx);

document.body.append($canvas);
```

You can also clear the rectangle as follows:

```ts
rect({
    x: 0,
    y: 0,
    w: 300,
    h: 300,
    clear: true,
}, ctx);
```

The **rect()** implements the following interfaces:

```ts
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

export const rect: (props: IRectProps, ctx: CanvasRenderingContext2D) => void;
```

