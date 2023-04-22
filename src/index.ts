import * as vector from './main/linear-algebra/vector';

const api = {
    ...vector,
};

declare global {
    interface Window {
        mzCanvas: typeof api,
    }
}

window.mzCanvas = window.mzCanvas || api;

export * from './main/linear-algebra/vector';