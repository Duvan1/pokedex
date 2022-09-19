import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkm-fav-button',
  templateUrl: './pkm-fav-button.component.html',
  styleUrls: ['./pkm-fav-button.component.scss'],
})
export class PkmFavButtonComponent implements OnInit {
  @Output() eventFav: EventEmitter<void> = new EventEmitter();
  @Input() check: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}
}
