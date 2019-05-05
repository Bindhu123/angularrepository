import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from "./customersrouting.module";

import { CustomersGridComponent } from './customers-grid.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent,CustomersGridComponent, CustomersCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
