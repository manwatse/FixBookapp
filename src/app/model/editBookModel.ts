export class editBookModel {
  constructor(id: number, name: string, author: string) {
    this._bookId = id;
    this._name = name;
    this._author = author;
  }
  private _bookId: number;
  private _name: string;
  private _author: string;

  set bookId(value: number) {
    this._bookId = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set author(value: string) {
    this._author = value;
  }

  get bookId(): number {
    return this._bookId;
  }
}
