import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxAvatartComponent } from './ngx-avatar.component';

describe('ImageHandlerComponent', () => {
  let component: NgxAvatartComponent;
  let fixture: ComponentFixture<NgxAvatartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAvatartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAvatartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
