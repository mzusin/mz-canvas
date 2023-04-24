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
    width: 100,
    height: 200
});
```
