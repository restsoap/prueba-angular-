import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftyComponent } from './componentes/softy/softy.component'

const routes: Routes = [
  {
    path: 'softy',
    component: SoftyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
