import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrarAnimalComponent } from './cadastrar-animal.component';

describe('CadastrarAnimalComponent', () => {
  let component: CadastrarAnimalComponent;
  let fixture: ComponentFixture<CadastrarAnimalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAnimalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
