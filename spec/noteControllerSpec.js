function NoteDouble() {
  this.text = 'test note'
};

function NoteDoubleTwo() {
  this.text = 'test note laaaa la laaa laa laa laa la'
};

it("app div has no notes on load", function() {
  var noteController = new NoteController()
  noteController._setup()
  assert.isEqual(document.getElementById("app").innerHTML, "<ul></ul>")
});

it("app div has note text on load", function() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList)
  var note = new NoteDouble()
  noteList.addNote(note)
  noteController._setup()
  var innerHtml = "<ul><li><div>test note</div></li></ul>"
  assert.isEqual(document.getElementById("app").innerHTML, innerHtml)
});

it("app div has note text on load", function() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList)
  var note = new NoteDouble()
  var note2 = new NoteDoubleTwo()
  noteList.addNote(note)
  noteList.addNote(note2)
  noteController._setup()
  var innerHtml = "<ul><li><div>test note</div></li><li><div>test note laaaa la l</div></li></ul>"
  assert.isEqual(document.getElementById("app").innerHTML, innerHtml)
});
