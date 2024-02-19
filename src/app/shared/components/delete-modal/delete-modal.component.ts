import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent {
  @Output()
  clickedDelete = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef){}

  clickDelete(){
    this.clickedDelete.emit(true)
    this.bsModalRef.hide();
  }
}
