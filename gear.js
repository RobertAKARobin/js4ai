#target "illustrator"
#include "lib.js"

var dialog = createDialog('Every n points');
var inputTeeth = dialog.input('Number of teeth', 10);
var inputRadius = dialog.input('Radius', 25);

dialog.onShow(function() {
  inputTeeth = Number(inputTeeth.text);
  inputRadius = Number(inputRadius.text);

  var outerRadius = inputRadius;
  var innerAngle = (360 / inputTeeth);
  var innerRadius = inputRadius * Math.cos(toRadians(innerAngle));

  var circumferenceGuide = app.activeDocument.pathItems.ellipse(
    0, // top
    0, // left
    outerRadius * 2, // width,
    outerRadius * 2, // height
  );
  circumferenceGuide.guides = true;

  var verticalGuide = app.activeDocument.pathItems.add();
  verticalGuide.setEntirePath([
    [outerRadius, 0],
    [outerRadius, 0 - outerRadius * 2]
  ]);
  verticalGuide.guides = true;

  var horizontalGuide = app.activeDocument.pathItems.add();
  horizontalGuide.setEntirePath([
    [0, 0 - outerRadius],
    [outerRadius * 2, 0 - outerRadius],
  ]);
  horizontalGuide.guides = true;

  var outerPointsPath = app.activeDocument.pathItems.polygon(
    outerRadius,
    0 - outerRadius,
    outerRadius,
    inputTeeth,
  );
  var outerPoints = outerPointsPath.pathPoints;

  var innerPointsPath = app.activeDocument.pathItems.polygon(
    outerRadius,
    0 - outerRadius,
    innerRadius,
    inputTeeth,
  );
  var innerPoints = innerPointsPath.pathPoints;

  var gearPath = [];

  for (var index = 0; index < outerPoints.length; index++) {
    var outerPoint = outerPoints[index];
    var innerPoint = innerPoints[index];
    gearPath.push(outerPoint.anchor);
    gearPath.push(innerPoint.anchor);
  }

  var gear = app.activeDocument.pathItems.add();
  gear.setEntirePath(gearPath);

  outerPointsPath.remove();
  innerPointsPath.remove();

  gear.selected = true;
  app.executeMenuCommand('join');

  circumferenceGuide.selected = true;
  verticalGuide.selected = true;
  horizontalGuide.selected = true;
  gear.selected = true;

  app.executeMenuCommand('group');
});
