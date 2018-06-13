import { DatabaseType } from "./DatabaseType";
import { isNumber } from "util";

export class Server {
    
    constructor(){
        this.id = 0;
    }

    private _type: DatabaseType;

    id: number; 
    
    hostname: string;
    portnumber: number;
    get type(): DatabaseType{ return this._type;}
    set type(value) { this._type = isNumber(value) ? Object.keys(DatabaseType)[value] : this._type = value; }
    database: string;
    rowVersion: any;

    get name() { return this.database + ' @ ' + this.hostname; }
}
