function NoteDouble() {
  this.text = 'test note'
};

function NoteDoubleTwo() {
  this.text = '012345678901234567890123456789'
};

it("an empty string is outputted when nothing is in the notelist", function (){
  var noteListView = new NoteListView();
  assert.isEqual(noteListView.format(), "<ul></ul>")
});

it("produces a correctly formatted output", function (){
  var noteDouble = new NoteDouble();
  var noteListView = new NoteListView();
  noteListView.list.addNote(noteDouble)
  assert.isEqual(noteListView.format(), "<ul><li><div>test note</div></li></ul>")
});

it("produces a correctly formatted output", function (){
  var noteListView = new NoteListView();
  var noteDouble = new NoteDouble();
  var noteDouble2 = new NoteDouble();

  noteListView.list.addNote(noteDouble)
  noteListView.list.addNote(noteDouble2)
  text = "<ul><li><div>test note</div></li><li><div>test note</div></li></ul>"
  assert.isEqual(noteListView.format(), text)
});

it("shows only 20 characters of each note", function (){
  var noteDoubleTwo = new NoteDoubleTwo();
  var noteListView = new NoteListView();
  noteListView.list.addNote(noteDoubleTwo)
  assert.isEqual(noteListView.format(), "<ul><li><div>01234567890123456789</div></li></ul>")
});
