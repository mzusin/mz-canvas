export const bbb = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    if(ctx){
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);
    }

    return { ctx, canvas };
};