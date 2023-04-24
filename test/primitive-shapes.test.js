describe('Primitive Shapes', () => {

    describe('rect()', () => {

        it("Basic rect doesn't fail", () => {
            const { ctx, $canvas } = mzCanvas.canvas({
                width: 300,
                height: 300,
            });

            mzCanvas.rect({
                x: 10,
                y: 10,
                w: 20,
                h: 30,
            }, ctx);

            // console.log($canvas.toDataURL())

            expect($canvas).toBeTruthy();
        });
    });
});