export class Book {

  private _id: number;
  name: string;
  author: string;


  constructor(name: string, author: string) {
    this.name = name;
    this.author = author;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
