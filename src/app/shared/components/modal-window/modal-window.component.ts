import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() okButtonText: string;
  @Input() cancelButtonText: string;
  @Output() modalEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitResult(value: boolean): void {
    this.modalEvent.emit(value);
  }

}
