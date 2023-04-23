import * as canvas from './core/canvas';
import * as primitiveShapes from './core/shapes/primitive-shapes';

const api = {
    ...canvas,
    ...primitiveShapes,
};

declare global {
    interface Window {
        mzCanvas: typeof api,
    }
}

window.mzCanvas = window.mzCanvas || api;

export * from './core/canvas';
export * from './core/shapes/primitive-shapes';