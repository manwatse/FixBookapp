export  class loginComplete {
  private _id:number;
  private _succes:boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get succes(): boolean {
    return this._succes;
  }

  set succes(value: boolean) {
    this._succes = value;
  }
}
