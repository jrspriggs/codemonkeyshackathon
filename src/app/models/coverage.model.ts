export class Coverage {
  public name: string;
  public selected: string;
  public value: string;
  public type: string;
  public premiumAmount: string;

  constructor( name: string,
                selected: string,
                value: string,
                type: string,
                premiumAmount: string) {
    this.name = name;
    this.selected = selected;
    this.value = value;
    this.type = type;
    this.premiumAmount = premiumAmount;
  }
}
