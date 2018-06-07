import { DatabaseType } from "./DatabaseType";

export class Server {
    constructor(){
        this.id = 0;
    }

    id: number;
    get name() {return this.hostname + ' - ' + this.database; }
    hostname: string;
    portnumber: number;
    type: DatabaseType;
    database: string;
    rowVersion: any;
}
