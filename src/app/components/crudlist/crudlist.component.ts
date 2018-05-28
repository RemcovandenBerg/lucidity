import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { CrudListViewItem } from "./CrudListViewItem";
import { tick } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";


@Component({
    selector: "hb-crudlist",
    templateUrl: "./crudlist.component.html",
    styleUrls: ["./crudlist.component.scss"],
    host: { class: 'clr-nav-level' }
})

export class CrudlistComponent implements OnInit {

    @Input()
    public navItems: Observable<CrudListViewItem[]>;

    @Input()
    public linkIdPathProp: string;

    @Input()
    public linkBasePath: string;

    private buildRouterLink(item: Object): string {
        return this.linkBasePath + '/' + encodeURIComponent(item[this.linkIdPathProp]);
    }

    @Output()
    public onNewItem: EventEmitter<void> = new EventEmitter<void>();

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.navItems = this.navItems.pipe(map(
            (items: CrudListViewItem[]) => items.map(a => {
                a.routerlink = this.buildRouterLink(a); 
                return a;
            })));
    }

    clickNew(): void {
        this.onNewItem.emit();
    }
}
