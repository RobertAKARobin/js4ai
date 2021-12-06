function createDialog(message) {
  var dialog = new Window('dialog', message);

  var self = {
    dialog: dialog,

    input: function(message, value) {
      var group = dialog.add('group');
      group.add('statictext', undefined, message.toString());
      return group.add('edittext', [0, 0, 200, 20], value);
    },

    button: function(message) {
      var group = dialog.add('group');
      group.add('button', undefined, message);
    },

    onShow: function(callback) {
      self.button('OK');
      if (dialog.show() === 1) {
        callback();
      } else {
        dialog.hide();
      }
    }
  }

  return self;
}

function everyNPoints(options) {
  var target = (options.target || app.activeDocument.selection[0]);
  var interval = (options.interval || 2);
  var offset = (options.offset || 0);
  var callback = (options.callback || function select(point) {
    point.selected = PathPointSelection.ANCHORPOINT;
  });

  var points = target.pathPoints;
  target.selected = false;

  for (var index = 0; index < points.length; index++) {
    var point = points[index];
    if (((index % interval) - offset) !== 0) {
      callback(point);
    }
  }
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
