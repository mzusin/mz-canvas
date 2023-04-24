# Circle

The **circle()** function is used to draw a circle shape or its segment.

```ts
import { canvas, circle } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

circle({
    cx: 100,
    cy: 100,
    r: 50,
    fillStyle: '#366d8c',
    strokeStyle: '#0f2b38',
    lineWidth: 15,
}, ctx);

document.body.append($canvas);
```

You can also draw only a circle segment:

```ts
import { canvas, circle } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

circle({
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

document.body.append($canvas);
```

