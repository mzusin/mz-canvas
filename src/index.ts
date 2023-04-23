import * as first from './core/canvas';

const api = {
    ...first,
};

declare global {
    interface Window {
        mzCanvas: typeof api,
    }
}

window.mzCanvas = window.mzCanvas || api;

export * from './core/canvas';