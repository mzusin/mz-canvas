export interface IRectProps {
    x: number;
    y: number;
    w: number;
    h: number;

    clear?: boolean;
    fill?: string;
    stroke?: string;
    lineWidth?: number;
}

export const rect = (ctx: CanvasRenderingContext2D, props: IRectProps) => {

    const { x, y, w, h} = props;

    if(props.clear){
        ctx.clearRect(x, y, w, h);
        return;
    }

    if(props.fill){
        ctx.fillStyle = props.fill;
        ctx.fillRect(x, y, w, h);
    }

    if(props.stroke){

        if(props.lineWidth){
            ctx.lineWidth = props.lineWidth;
        }

        ctx.strokeStyle = props.stroke;
        ctx.strokeRect(x, y, w, h);
    }
};