## Basic Usage

First, install the module using npm:

```cmd
npm install mz-canvas
```

Or using Yarn: 

```cmd
yarn add mz-canvas
```

Then you can import any function as follows:

```js
import { canvas } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: 100, // px
    height: 200, // px
});
```

You can also specify other units than pixels:

```js
import { canvas } from 'mz-canvas';

const { ctx, $canvas } = canvas({
    width: '100%',
    height: '100%',
});
```

The **canvas()** implements the following interfaces:

```ts
export interface ICanvas {
    width: number|string;
    height: number|string;

    id?: string;
    classes?: string;
    style?: string;
    title?: string;
    tabindex?: number;

    // accessibility --------
    role?: string;
    fallback?: string;
    ariaLabel?: string;

    // attributes like alpha, colorSpace, willReadFrequently, etc.
    contextAttributes?: CanvasRenderingContext2DSettings;

    // if true, it will use getImageData / putImageData 
    // when canvas size changes (it affects performance)
    restoreImageDataOnResize?: boolean;
}

export const canvas: (props: ICanvas) => {
    ctx: CanvasRenderingContext2D | null;
    $canvas: HTMLCanvasElement;
};
```
