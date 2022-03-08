import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-top',
  templateUrl: './panel-top.component.html',
  styleUrls: ['./panel-top.component.scss']
})
export class PanelTopComponent implements OnInit {

  @Input() selectedtab: string = 'USERS';
  @Output() newSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() addModalOpen: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchinput: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(selected: string) {
    this.selectedtab = selected;
    this.newSelect.emit(selected);
  }

  openModalEmit() {
    this.addModalOpen.emit('add' + this.selectedtab.toLowerCase());
  }
}
