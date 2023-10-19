import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { RegionService } from '../../services/region.service';



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit{
  vehicleForm: FormGroup;
  regions: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private regionService: RegionService) {
    this.vehicleForm = this.formBuilder.group({
      make: [
        '',
        [Validators.required, Validators.maxLength(50)], // Ejemplo: Máximo 50 caracteres
      ],
      model: [
        '',
        [Validators.required, Validators.maxLength(50)], // Ejemplo: Máximo 50 caracteres
      ],
      year: [
        null,
        [Validators.required, this.customYearValidator()], // Ejemplo: Uso de una validación personalizada
      ],
    });
  }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((data) => {
      this.regions = data.data;
    });
  }

  // Validación personalizada para el año
  customYearValidator(): ValidatorFn {
    return (control) => {
      const year = control.value;
      const currentYear = new Date().getFullYear();
      if (year && (year < 1900 || year > currentYear)) {
        return { invalidYear: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      // Aquí puedes enviar los datos del formulario para su procesamiento.
      const formData = this.vehicleForm.value;
      console.log(formData);
    }
  }
  

  volverAlPrincipal() {
    this.router.navigate(['/principal']);
  }
}