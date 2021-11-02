#target "illustrator"
#include "lib.js"

var dialog = createDialog('Every n points');
var inputInterval = dialog.input('Interval', 2);
var inputOffset = dialog.input('Offset', 0);

dialog.onShow(function (){
  var activePath = app.activeDocument.selection[0];
  var points = activePath.pathPoints;

  activePath.selected = false;
  inputInterval = Number(inputInterval.text);
  inputOffset = Number(inputOffset.text);

  for (var index = 0; index < points.length; index++) {
    var point = points[index];
    if (((index % inputInterval) - inputOffset) !== 0) {
      point.selected = PathPointSelection.ANCHORPOINT;
    }
  }
});
