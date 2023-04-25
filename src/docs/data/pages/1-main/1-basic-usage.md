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

The **canvas()** implements the following interfaces:

```ts
export interface ICanvas {
    width: number;
    height: number;

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
}

export const canvas: (props: ICanvas) => {
    ctx: CanvasRenderingContext2D | null;
    $canvas: HTMLCanvasElement;
};
```
