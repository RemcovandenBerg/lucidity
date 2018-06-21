import { Component, EventEmitter, Output, Input } from "@angular/core";
import { CrudListViewItem } from "./CrudListViewItem";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "hb-crudlist",
    templateUrl: "./crudlist.component.html",
    styleUrls: ["./crudlist.component.scss"],
    host: { class: 'clr-nav-level' }
})

export class CrudlistComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
    
  } 
  
  @Input()
  public linkDescriptionPathProp: string;
  
  @Input()
  public entityName: string;
  
  @Input()
  public linkIdPathProp: string;
  
  @Input()
  public iconShape: string;
  
  @Input()
  public linkBasePath: string;
  
  @Output()
  public onNewItem: EventEmitter<void> = new EventEmitter<void>();
  
  private completeWithRouterlink(items: CrudListViewItem[]): CrudListViewItem[] { 
    return items.map( item => {
      item.routerlink = this.linkBasePath + '/' + encodeURIComponent(item[this.linkIdPathProp]);
      return item;
    });
  }

  private _navItems: Observable<CrudListViewItem[]>;

  public get navItems(){ return this._navItems; }
  
  @Input()
  public set navItems(value: Observable<CrudListViewItem[]>)
  { 
    this._navItems = value.pipe(map(((list) => this.completeWithRouterlink(list))));
  };
  
  clickNew(): void {
      this.router.navigate([this.linkBasePath, 0, 'edit'], { relativeTo : this.route });
      this.onNewItem.emit();
    }
}
