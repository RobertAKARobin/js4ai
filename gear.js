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

  var gearPath = app.activeDocument.pathItems.star(
    outerRadius, // centerX
    0 - outerRadius, // centerY
    outerRadius, // radius
    innerRadius, // inner radius
    inputTeeth, // points
  );

  everyNPoints({
    target: gearPath,
    interval: 2,
  }); // Rotate by ((360 / innerAngle) / 2)

  /**
   * Tried using app.executeMenuCommand('transformrotate'), but can't specify parameters.
   * Must manually:
   * 1. Click 'Rotate'
   * 2. Click center of gear to specify rotation point -- sometimes it isn't the physical center of the gear
   * 3. Rotate
   */
});
