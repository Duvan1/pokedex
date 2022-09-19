import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkm-button',
  templateUrl: './pkm-button.component.html',
  styleUrls: ['./pkm-button.component.scss'],
})
export class PkmButtonComponent implements OnInit {
  @Output() eventPkm: EventEmitter<void> = new EventEmitter();
  @Input() pkmType!: string;
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.pkmType);
    
  }
}
