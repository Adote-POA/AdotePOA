import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarAnimalComponent } from './components/cadastrar-animal/cadastrar-animal.component';
import { LoginComponent } from './components/login/login.component';
import { SejaVoluntarioComponent } from './components/seja-voluntario/seja-voluntario.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { InformacoesPetComponent } from './components/informacoes-pet/informacoes-pet.component';
import { authGuard, noAuthGuard } from './guard/auth.guard';
// AQUI É ONDE DECLARA-SE AS ROTAS E SEUS COMPONENTS
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cadastrar-animal',
    component: CadastrarAnimalComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard],
  },
  {
    path: 'seja-voluntario',
    component: SejaVoluntarioComponent
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent
  },
  {
    path: 'informacoes-pet/:petId',
    component: InformacoesPetComponent
  },
];
