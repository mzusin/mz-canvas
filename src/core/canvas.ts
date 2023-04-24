import { ICanvas, IFillProps, IStrokeProps } from '../interfaces';
import { isNumber } from 'mz-math';

const setAttributes = ($canvas: HTMLCanvasElement, attributes: [string, string|number|undefined][]) => {
    for(const attr of attributes){

        const value = attr[1];
        if(value === undefined) continue;

        const key = attr[0];
        $canvas.setAttribute(key, value.toString());
    }
};

export const setContextProps = (props: [string, string|number|undefined][], ctx: CanvasRenderingContext2D) => {
    for(const prop of props){

        const value = prop[1];
        if(value === undefined) continue;

        const key = prop[0];
        ctx[key] = value;
    }
};

export const canvas = (props: ICanvas) => {

    const $canvas: HTMLCanvasElement = document.createElement('canvas');

    // Get the DPR and size of the canvas.
    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
    const dpr = window.devicePixelRatio;

    const isNumericDims = isNumber(props.width) && isNumber(props.height);

    if(isNumericDims){
        $canvas.width = (props.width as number) * dpr;
        $canvas.height = (props.height as number) * dpr;
    }
    else{
        const rect = $canvas.getBoundingClientRect();
        $canvas.width = rect.width * dpr;
        $canvas.height = rect.height * dpr;
    }

    setAttributes($canvas, [
        ['id', props.id],
        ['class', props.classes],
        ['style', props.style],
        ['title', props.title],
        ['tabindex', props.tabindex],
        ['role', props.role],
        ['aria-label', props.ariaLabel],
    ]);

    // Used to make the canvas accessible by providing fallback text
    // to be displayed when the media doesn't load
    // or the user is unable to experience it as intended
    if(props.fallback){
        $canvas.textContent = props.fallback;
    }

    const ctx = typeof $canvas.getContext === 'function' ? $canvas.getContext('2d') : null;

    // Scale the context to ensure correct drawing operations.
    ctx?.scale(dpr, dpr);

    // Set the "drawn" size of the canvas.
    $canvas.style.width = isNumber(props.width) ? `${ props.width }px` : props.width.toString();
    $canvas.style.height = isNumber(props.height) ? `${ props.height }px` : props.height.toString();

    return { ctx, $canvas };
};

export const stroke = (props: IStrokeProps, ctx: CanvasRenderingContext2D) => {
    setContextProps([
        ['lineWidth', props.lineWidth],
        ['strokeStyle', props.strokeStyle],
        ['lineCap', props.lineCap],
        ['lineJoin', props.lineJoin],
        ['miterLimit', props.miterLimit],
        ['lineDashOffset', props.lineDashOffset],
    ],ctx);

    if(props.lineDashSegments){
        ctx.setLineDash(props.lineDashSegments);
    }
};

export const fill = (props: IFillProps, ctx: CanvasRenderingContext2D) => {

    if(props.fillStyle !== undefined){
        ctx.fillStyle = props.fillStyle;
    }

    setContextProps([
        ['shadowOffsetX', props.shadowOffsetX],
        ['shadowOffsetY', props.shadowOffsetY],
        ['shadowBlur', props.shadowBlur],
        ['shadowColor', props.shadowColor],
    ],ctx);
};