#target "illustrator"
#include "lib.js"

var dialog = createDialog('Every n points');
var inputInterval = dialog.input('Interval', 2);
var inputOffset = dialog.input('Offset', 0);

dialog.onShow(function (){
  everyNPoints({
    interval: Number(inputInterval.text),
    offset: Number(inputOffset.text)
  });
});
