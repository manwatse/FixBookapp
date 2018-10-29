export class moveBookMessage {
  userId:number;
  bookId:number;
  columId:number;


  constructor(userId: number, bookId: number, columId: number) {
    this.userId = userId;
    this.bookId = bookId;
    this.columId = columId;
  }
}
