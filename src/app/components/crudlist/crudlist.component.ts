import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CrudListViewItem } from "./CrudListViewItem";
import { tick } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';


@Component({
    selector: "hb-crudlist",
    templateUrl: "./crudlist.component.html",
    styleUrls: ["./crudlist.component.scss"]
})

export class CrudlistComponent implements OnInit {

    @Input()
    public navItems: Observable<CrudListViewItem[]>;

    @Output()
    public onNewItem: EventEmitter<void> = new EventEmitter<void>();

    constructor() {

    }

    ngOnInit() {

    }

    clickNew(): void {
        this.onNewItem.emit();
    }
}
