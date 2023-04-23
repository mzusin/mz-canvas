import { ICanvas, IFillProps, IStrokeProps } from '../interfaces';

const setAttributes = ($canvas: HTMLCanvasElement, attributes: [string, string|number|undefined][]) => {
    for(const attr of attributes){

        const value = attr[1];
        if(value === undefined) continue;

        const key = attr[0];
        $canvas.setAttribute(key, value.toString());
    }
};

export const canvas = (props: ICanvas) => {

    const $canvas: HTMLCanvasElement = document.createElement('canvas');
    $canvas.width = props.width;
    $canvas.height = props.height;

    setAttributes($canvas, [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],
        ['title', props.title],
        ['tabindex', props.tabindex],
        ['role', props.role],
    ]);

    // Used to make the canvas accessible by providing fallback text
    // to be displayed when the media doesn't load
    // or the user is unable to experience it as intended
    if(props.fallback){
        $canvas.textContent = props.fallback;
    }

    const ctx = typeof $canvas.getContext === 'function' ? $canvas.getContext('2d') : null;

    return { ctx, $canvas };
};

export const stroke = (props: IStrokeProps, ctx: CanvasRenderingContext2D) => {
    if(props.lineWidth){
        ctx.lineWidth = props.lineWidth;
    }

    if(props.strokeStyle){
        ctx.strokeStyle = props.strokeStyle;
    }
};

export const fill = (props: IFillProps, ctx: CanvasRenderingContext2D) => {
    if(props.fillStyle){
        ctx.fillStyle = props.fillStyle;
    }
};