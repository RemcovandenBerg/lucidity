import { Server } from "./Server";
import { Query } from "./Query";

export class Sync {

    constructor() {
        this.id = 0;
        this.sourceServer =  null;
        this.sourceServerId = 0;
        this.targetServer = null;
        this.targetServerId = 0;
        this.query = null;
        this.queryId = 0;
        this.isScheduleEnabled = false;
        this.cronSchedule = '';
        this.rowVersion = null;
    }

    get name() {
        let temp = '' + this.id;
        if (!!this.query)
            return temp + ' ' + this.query.name;
        return temp;
    }

    id: number;

    sourceServer: Server;
    sourceServerId: number;

    targetServer: Server;
    targetServerId: number;

    query: Query;
    queryId: number;

    isScheduleEnabled: boolean;
    cronSchedule: string;

    rowVersion: any;
}
