import { DatabaseType } from "./DatabaseType";

export class Server {

    get name() {return this.hostname; }
    hostname: string;
    portnumber: number;
    dbtype: DatabaseType;
    database: string;
}
