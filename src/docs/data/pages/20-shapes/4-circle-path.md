# Circle Path

The **circlePath()** function is used to draw and return a [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) circle or its segment.

```ts
import { circlePath } from 'mz-canvas';

const circle: Path2D = circlePath({
    cx: 100,
    cy: 100,
    r: 50,
    
    startAngleRad: 0,
    endAngleRad: Math.PI / 2,
    counterclockwise: true,

    fillStyle: '#366d8c',
    strokeStyle: '#0f2b38',
    lineWidth: 15,
});

// Do something with Path2D object
console.log(circle);
```

You can also create a Path2D object and draw it right away:

```ts
import { canvas, circlePath } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

const circle: Path2D = circlePath({
    cx: 100,
    cy: 100,
    r: 50,
    
    startAngleRad: 0,
    endAngleRad: Math.PI / 2,
    counterclockwise: true,

    fillStyle: '#366d8c',
    strokeStyle: '#0f2b38',
    lineWidth: 15,
}, ctx);

// Do something with Path2D object
console.log(circle);

document.body.append($canvas);
```

The **circlePath()** implements the following interfaces:

```ts
export interface ICircle {
    cx: number;
    cy: number;
    r: number;
    startAngleRad?: number;
    endAngleRad?: number;
    counterclockwise?: boolean;
}

export interface ICircleProps extends ICircle, IStrokeProps, IFillProps { }

export const circlePath: (props: ICircleProps, ctx?: CanvasRenderingContext2D) => Path2D;
```


