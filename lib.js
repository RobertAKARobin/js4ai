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
