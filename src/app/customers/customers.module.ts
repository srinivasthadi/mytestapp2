import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    pathMatch: 'full'
  },
  {
    path:'details',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  declarations: [CustomerDetailsComponent, CustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule { }
