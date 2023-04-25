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

export const setCanvasSize = (
    $canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D|null,
    props: ICanvas
) => {

    const isNumericDims = isNumber(props.width) && isNumber(props.height);
    let _width = isNumericDims ? (props.width as number) : 0;
    let _height = isNumericDims ? (props.height as number) : 0;

    if(!isNumericDims){
        const isCanvasInDOM = !!$canvas.parentNode;

        if(!isCanvasInDOM){
            document.body.append($canvas);
        }

        const rect = $canvas.getBoundingClientRect();
        _width = rect.width;
        _height = rect.height;

        if(!isCanvasInDOM){
            $canvas.remove();
        }
    }

    let imageData: ImageData|undefined = undefined;

    if(props.restoreImageDataOnResize){
        // changing the size of the canvas clears it;
        // save it, and then restore
        imageData = ctx?.getImageData(0, 0, $canvas.width, $canvas.height);
    }

    $canvas.width = _width;
    $canvas.height = _height;

    if(props.restoreImageDataOnResize && ctx && imageData ){
        ctx.putImageData(imageData, 0, 0);
    }
};

export const canvas = (props: ICanvas) => {

    const $canvas: HTMLCanvasElement = document.createElement('canvas');

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

    const ctx =
        typeof $canvas.getContext === 'function' ?
            $canvas.getContext('2d', props.contextAttributes) :
            null;

    setCanvasSize($canvas, ctx, props);

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