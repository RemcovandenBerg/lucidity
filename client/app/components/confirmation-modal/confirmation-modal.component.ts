import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "hb-confirmation-modal",
    templateUrl: "./confirmation-modal.component.html"
  })
  export class ConfirmationModalComponent {

    @Input()
    public open: boolean;

    @Output()
    public onConfirm = new EventEmitter<any>();

    @Output()
    public onCancel = new EventEmitter<any>();


    public confirmed(data){
        //of andersom?
        this.open = false;
        this.onConfirm.emit(data);
    }

    public cancel(){
        this.open = false;
        this.onCancel.emit();
    }

}