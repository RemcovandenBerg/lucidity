import { DatabaseType } from "./DatabaseType";
import { isNumber } from "util";

export class Server {

    constructor() {
      this.id = 0;
      this.hostname = '';
      this.database = '';
      this.type = DatabaseType.MariaDb;
      this.portnumber = 0;
      this.rowVersion = null;
    }

    private _type: DatabaseType;

    id: number;
    hostname: string;
    portnumber: number;
    database: string;
    get type(): DatabaseType { return this._type; }
    set type(value) { this._type = isNumber(value) ? Object.keys(DatabaseType)[value] : this._type = value; }
    rowVersion: any;

    get name(): string {
        return (this.database) ? this.database + ' @ ' + this.hostname : '';
    }
}
