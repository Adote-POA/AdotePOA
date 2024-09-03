import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SejaVoluntarioComponent } from './seja-voluntario.component';

describe('SejaVoluntarioComponent', () => {
  let component: SejaVoluntarioComponent;
  let fixture: ComponentFixture<SejaVoluntarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SejaVoluntarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SejaVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
