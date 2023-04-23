describe('createCanvas()', () => {

  it('simple creation', () => {
    const { ctx, canvas } = mzCanvas.createCanvas({
      width: 200,
      height: 300,
    });

    expect(ctx).toBeTruthy();
    expect(canvas).toBeTruthy();
  })
});