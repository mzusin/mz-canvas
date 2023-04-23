describe('canvas()', () => {

  it('Create canvas 200 x 300.', () => {
    const { ctx, $canvas } = mzCanvas.canvas({
      width: 200,
      height: 300,
    });

    expect(ctx).toBeTruthy();
    expect($canvas).toBeTruthy();
  });

  const props = {
    width: 100,
    height: 300,
    id: 'my-canvas',
    classes: 'class-1 class-2',
    style: 'color: red; border: 3px solid rgb(239, 239, 239);',
    title: 'my title',
    tabindex: -1,
    fallback: 'The fallback text',
    role: 'presentation',
  };

  it('Canvas should have the specified width', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.width).toEqual(props.width);
  });

  it('Canvas should have the specified height', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.height).toEqual(props.height);
  });

  it('Canvas should have the specified id', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.id).toEqual(props.id);
  });

  it('Canvas should have the specified title', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.title).toEqual(props.title);
  });

  it('Canvas should have the specified role', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.role).toEqual(props.role);
  });

  it('Canvas should have the specified tabindex', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.tabIndex).toEqual(props.tabindex);
  });

  it('Canvas should have the specified classes', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.classList.contains('class-1')).toBeTrue();
    expect($canvas.classList.contains('class-2')).toBeTrue();
  });

  it('Canvas should have the specified style', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.style.color).toEqual('red');
    expect($canvas.style.border).toEqual('3px solid rgb(239, 239, 239)');
  });

  it('Canvas should have the specified fallback', () => {
    const { $canvas } = mzCanvas.canvas(props);
    expect($canvas.textContent.trim()).toEqual(props.fallback.trim());
  });
});