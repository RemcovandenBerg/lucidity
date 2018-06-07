import { DatabaseType } from "./DatabaseType";

export class Server {

    get name() {return this.hostname + ' - ' + this.database; }
    hostname: string;
    portnumber: number;
    type: DatabaseType;
    database: string;
    rowVersion: any;
}
