import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrinterServiceComponent } from './printer-service/printer-service.component';

const routes: Routes = [
  {path:'PrinterServiceComponent', component: PrinterServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
