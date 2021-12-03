import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistrarComponent } from './components/seguridad/registrar/registrar.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'libros', component: LibrosComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
