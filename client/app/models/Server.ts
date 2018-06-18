import { DatabaseType } from "./DatabaseType";
import { isNumber } from "util";

export class Server {

    constructor() {
        this.id = 0;
        this.hostname = '';
        this.database = '';
        this.portnumber = 0;
        this.type = DatabaseType.SqlServer;
        this.rowVersion = null;
    }

    private _type: DatabaseType;

    id: number;
    hostname: string;
    portnumber: number;
    database: string;
    type: DatabaseType;
    rowVersion: any;

    get name(): string {
        return (this.database) ? this.database + ' @ ' + this.hostname : '';
    }
}
