function merge(target, origin) {
  for (var property in origin) {
    try {
      target[property] = origin[property];
    } catch (error) {
      alert(property + ': ' + error.message);
    }
  }
  return target;
}

var COLOR_BLUE = merge(new RGBColor(), {
  blue: 255,
});

var RASTER_OPTIONS = merge(new RasterizeOptions(), {
  antiAliasingMethod: AntiAliasingMethod.TYPEOPTIMIZED,
  colorModel: RasterizationColorModel.GRAYSCALE,
  padding: 0,
  resolution: 300,
  transparency: true,
});

var TRACING_OPTIONS = { // https://documentation.help/Illustrator-CS6/documentation.pdf
  tracingMode: TracingModeType.TRACINGMODEBLACKANDWHITE, // Has to come first; let's pretend JS goes through objects in order
  tracingMethod: TracingMethodType.TRACINGMETHODABUTTING,
  cornerFidelity: 50,
  fills: false,
  ignoreWhite: true,
  maxStrokeWeight: 50,
  minArea: 1,
  noiseFidelity: 1,
  pathFidelity: 100,
  snapCurveToLines: false,
  strokes: true,
  threshold: 1,
};

for (var i = 0, target; target = selection[i]; i += 1) {
  convert(target);
}

function convert(target) {
  var rasterResult = app.activeDocument.rasterize(
    target,
    target.controlBounds,
    RASTER_OPTIONS,
  );

  var tracer = rasterResult.trace().tracing;
  tracer.tracingOptions = merge(tracer.tracingOptions, TRACING_OPTIONS);

  var group = tracer.expandTracing();
  app.executeMenuCommand('ungroup');
  group.selected = true;

  for (var i = 0; i < group.pathItems.length; i += 1) {
    var path = group.pathItems[i];
    path.strokeColor = COLOR_BLUE;
    path.strokeWidth = 0.1;
  }
}
