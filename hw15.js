process.stdout.write("\033c\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W");
console.arr = (...args) =>
  console.table(args.map((i, index) => ({ [`param_${index + 1}`]: i })));

// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання нової нотатки,
//  видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього,
// у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те,
// скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

//Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

//Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.

// Переменная для начала подсчета айди заметки
let globalId = 0;
function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  return `${year}.${month.padStart(2, "0")}.${day.padStart(2, "0")}`;
}

// Описываем класс заметки
class Note {
  //Переменные по умолчанию для всех заметок: Выполнена она или нет, Удалена, Айди, Текст заметки
  _isDone = false;
  _isDelete = false;
  _id;
  _note;
  _createdAt = new Date();
  _updatedAt = new Date();
  // Конструктор в котором создаем Текст заметки и Айди
  constructor(noteText) {
    if (!noteText) {
      throw new Error("noteText can not be empty");
    }
    this._note = noteText;
    this._id = ++globalId;
  }
  // Получаем Айди текущей заметки
  get id() {
    return this._id;
  }
  // Получаем текст текущей заметки
  get note() {
    return this._note;
  }
  // Устанавливаем полученный текст заметки
  set note(value) {
    if (!value) {
      throw new Error("value can not be empty");
    }
    this._updatedAt = new Date();
    this._note = value;
  }
  // Получаем Выполнена текущая заметка или нет
  get isDone() {
    return this._isDone;
  }
  // Устанавливаем для текущей заметки, что она Выполнена или нет
  set isDone(value) {
    this._isDone = value;
  }
  // Получаем Удалена текущая заметка или нет
  get isDelete() {
    return this._isDelete;
  }
  // Устанавливаем для текущей заметки, что она Удалена или нет
  set isDelete(value) {
    this._isDelete = value;
  }
  // Получаем дату создания заметки
  get createdAt() {
    return this._createdAt;
  }
  // Получаем дату изменения заметки
  get updatedAt() {
    return this._updatedAt;
  }
  // Устанавливаем дату изменения для текущей заметки
  set updatedAt(value) {
    this._updatedAt = value;
  }
  compareUpdatedAt(date) {
    return formatDate(this._updatedAt) === formatDate(date);
  }
}
// Описываем класс Списка заметок
class ListNote {
  // Переменная по умолчанию для списка заметок. Оно будет хранить экземпляры классов заметок
  _note = [];
  // Получаем список заметок, которые не удалены
  get notes() {
    return this._note.filter((i) => !i.isDelete);
  }
  // Добавляем экземпляр заметки к общему списку заметок
  set notes(value) {
    if (Array.isArray(value)) {
      this._note = value;
      return;
    }

    this._note.push(value);
  }
  // Получаем список не удаленных заметок
  get notesDone() {
    return this._note.filter((i) => i.isDone && !i.isDelete);
  }
  // Ищем заметку и устанавливаем признак Выполнено для найденной заметки
  set notesDone(value) {
    const find = this._note.findIndex((i) => i.id === value?.id ?? value);
    if (find >= 0) {
      this._note[find].isDone = true;
    }
  }
  // Получаем список удаленных заметок
  get notesDelete() {
    return this._note.filter((i) => i.isDelete);
  }
  // Ищем заметку и устанавливаем признак "помечена для Удаления" для найденной заметки
  set notesDelete(value) {
    const find = this._note.findIndex((i) => i.id === value?.id ?? value);
    if (find >= 0) {
      this._note[find].isDelete = true;
    }
  }
  // Получаем инфо о: Список всех заметок; Список выполненных заметок; Список Удаленных заметок; Количество удаленных заметок; Количество заметок; Количество не выполненных заметок
  get info() {
    return {
      notes: this.notes,
      notesDone: this.notesDone,
      notesDelete: this.notesDelete,
      notesDeleteCount: this.notesDelete.length,
      notesCount: this.notes.length,
      notesNotDone: this.notes.length - this.notesDone.length,
    };
  }
  sort(dir) {
    let newDir = dir?.toLocaleLowerCase?.();
    return this.notes.sort((a, b) =>
      newDir === "asc" ? b.isDone - a.isDone : a.isDone - b.isDone
    );
  }
  find(name) {
    return this.notes.find((i) =>
      i.note.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }
  sortByDate(dir) {
    let newDir = dir?.toLocaleLowerCase?.();
    return this.notes.sort((a, b) =>
      newDir === "asc" ? b.updatedAt - a.updatedAt : a.updatedAt - b.updatedAt
    );
  }
  findByDate(date) {
    return this.notes.find((i) => i.compareUpdatedAt(date));
  }
}

const listNote = new ListNote();

const note = new Note("Say hello to Misha");
const note2 = new Note("Say hello to Misha 2");
const note3 = new Note("New note from Misha");

listNote.notes = note;
listNote.notes = note2;
listNote.notes = note3;

listNote.notesDone = note2;
listNote.notesDelete = note3;

console.log(listNote.info);
console.log(listNote.sort("aSc"));
console.log(listNote.find("Misha 2"));
console.log(listNote.findByDate(new Date()));
