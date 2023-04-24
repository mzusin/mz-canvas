# Rectangle Path

The **rectPath()** function is used to draw and return a [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) rectangle.

```ts
import { rectPath } from 'mz-canvas';

const rect: Path2D = rectPath({
    x: 0,
    y: 0,
    w: 300,
    h: 300,
});

// Do something with Path2D object
console.log(rect);
```

You can also create a Path2D object and draw it right away:

```ts
import { canvas, rectPath } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100,
    height: 200
});

const rect: Path2D = rectPath({
    x: 0,
    y: 0,
    w: 300,
    h: 300,
    fillStyle: '#366d8c',
    strokeStyle: '#0f2b38',
    lineWidth: 15,
}, ctx);

// Do something with Path2D object
console.log(rect);

document.body.append($canvas);
```