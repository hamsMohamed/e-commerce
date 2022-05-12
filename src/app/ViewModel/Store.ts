export class Store {
    Name:string;
    Logo: string;
    Branches:string[];
    constructor(name: string ,logo:string ,branch:string[])
    {
       this.Name=name;
       this.Logo=logo;
       this.Branches=branch;
    }
}
