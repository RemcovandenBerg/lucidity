import { DatabaseType } from "./DatabaseType";
import { hostname } from "os";

export class Server {

    get name() {return this.hostname; }
    hostname: string;
    portnumber: number;
    dbtype: DatabaseType;
    database: string;
}
