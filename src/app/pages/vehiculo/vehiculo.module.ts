import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Agrega esta importación
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule

import { IonicModule } from '@ionic/angular';

import { VehiculoPageRoutingModule } from './vehiculo-routing.module';

import { VehiculoPage } from './vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [VehiculoPage]
})
export class VehiculoPageModule {}
