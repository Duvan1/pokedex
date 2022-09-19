import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavComponent } from './poke-fav.component';

describe('PokeFavComponent', () => {
  let component: PokeFavComponent;
  let fixture: ComponentFixture<PokeFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
