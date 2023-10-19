import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { ClimaWidgetComponent } from '../clima-widget/clima-widget.component'; // Asegúrate de que la ruta sea correcta


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage,
  ClimaWidgetComponent,
],
})
export class PrincipalPageModule {}
