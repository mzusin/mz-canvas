import * as first from './core/first';

const api = {
    ...first,
};

declare global {
    interface Window {
        mzCanvas: typeof api,
    }
}

window.mzCanvas = window.mzCanvas || api;

export * from './core/first';