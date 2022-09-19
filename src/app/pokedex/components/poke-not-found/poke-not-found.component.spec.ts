import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNotFoundComponent } from './poke-not-found.component';

describe('PokeNotFoundComponent', () => {
  let component: PokeNotFoundComponent;
  let fixture: ComponentFixture<PokeNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
