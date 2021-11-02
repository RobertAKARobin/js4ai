var dialog = new Window('dialog', 'Right-angle gear');

function input(message, value) {
  var group = dialog.add('group');
  group.add('statictext', undefined, message.toString());
  return group.add('edittext', [0, 0, 200, 20], value);
}

function button(message) {
  var group = dialog.add('group');
  group.add('button', undefined, 'OK');
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

var inputTeeth = input('Number of teeth', 10);
var inputRadius = input('Radius', 25);
var submit = button('OK');

if (dialog.show() === 1) {
  var inputTeeth = Number(inputTeeth.text);
  var inputRadius = Number(inputRadius.text);
  var adjacentMultiplier = Math.cos(toRadians(360 / inputTeeth));
  var adjacentLength = adjacentMultiplier * inputRadius;

  var gearBoundary = app.activeDocument.pathItems.ellipse(
    0, // top
    0, // left
    inputRadius * 2, // width,
    inputRadius * 2, // height
  );
  gearBoundary.guides = true;

  var gearPath = app.activeDocument.pathItems.star(
    inputRadius, // centerX
    0 - inputRadius, // centerY
    inputRadius, // radius
    adjacentLength, // inner radius
    inputTeeth, // points
  );

  var points = gearPath.pathPoints;
  for (var index = 0; index < points.length; index++) {
    var point = points[index];
    if (index % 2 !== 0) {
      point.selected = PathPointSelection.ANCHORPOINT;
    }
  }
  app.executeMenuCommand('transformrotate');
} else {
  dialog.hide();
}
