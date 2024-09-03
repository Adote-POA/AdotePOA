import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarAnimalComponent } from './components/cadastrar-animal/cadastrar-animal.component';
import { LoginComponent } from './components/login/login.component';
import { SejaVoluntarioComponent } from './components/seja-voluntario/seja-voluntario.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cadastrar-animal',
    component: CadastrarAnimalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'seja-voluntario',
    component: SejaVoluntarioComponent
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },
];
