import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pkm-top-bar',
  templateUrl: './pkm-top-bar.component.html',
  styleUrls: ['./pkm-top-bar.component.scss'],
})
export class PkmTopBarComponent implements OnInit {
  @Input() logo!: string;
  @Input() counter!: number;
  @Output() goToFav: EventEmitter<void> = new EventEmitter();

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.route.navigateByUrl('pokedex');
  }
}
