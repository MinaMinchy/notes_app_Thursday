(function(exports){
  function NoteController(noteList = new NoteList()){
    this._noteList = noteList
    this._setup

  }

  NoteController.prototype = {
    _setup: function() {
      var noteListView = new NoteListView(this._noteList)
      document.getElementById("app").innerHTML = noteListView.format()
    }
  }
  exports.NoteController = NoteController
})(this);
