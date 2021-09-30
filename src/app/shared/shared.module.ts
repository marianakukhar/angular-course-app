import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

const COMPONENTS = [
  components.ButtonComponent,
  components.HeaderComponent,
  components.InfoComponent,
  components.SearchComponent,
  components.ModalWindowComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    ModalWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
