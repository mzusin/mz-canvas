export interface ICanvas {
    width: number;
    height: number;
}

export const createCanvas = (props: ICanvas) => {

    const canvas = document.createElement('canvas');
    canvas.width = props.width;
    canvas.height = props.height;

    const ctx = canvas.getContext('2d');

    return { ctx, canvas };
};