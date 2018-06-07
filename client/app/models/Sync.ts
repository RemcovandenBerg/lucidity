import { Server } from "./Server";
import { Query } from "./Query";

export class Sync {
    id: number;
    sourceServer: Server;
    sourceServerId: number;

    targetServer: Server;
    targetServerId: number;

    query: Query;
    query_Id: number;
    isScheduleEnabled: boolean;
    cronSchedule: string;
    rowVersion: any;
}
