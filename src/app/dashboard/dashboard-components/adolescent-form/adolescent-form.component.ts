import { Component } from '@angular/core';
import { AdolescentService } from 'src/app/adolescent.service';

@Component({
  selector: 'app-adolescent-form',
  templateUrl: './adolescent-form.component.html',
  styleUrls: ['./adolescent-form.component.scss']
})
export class AdolescentFormComponent {
  newAdolescent: any = {
    condition: 'A'
  };

  constructor(private adolescentService: AdolescentService) { }

  submitForm() {
    // Validar que los campos no contengan números
    if (/\d/.test(this.newAdolescent.name) || /\d/.test(this.newAdolescent.type) ||
      /\d/.test(this.newAdolescent.beneficiary) || /\d/.test(this.newAdolescent.responsible) 
      || /\d/.test(this.newAdolescent.level)) {
      alert('Los campos Name, Type, Beneficiary y Responsible no deben contener números.');
      return;
    }

    // Validar que el campo "duration" solo contenga números
    if (!/^\d+$/.test(this.newAdolescent.duration)) {
      alert('El campo Duration solo debe contener números.');
      return;
    }

    this.adolescentService.saveAdolescent(this.newAdolescent).subscribe(() => {
      this.newAdolescent = {
        condition: 'A'
      };
      alert('Adolescente registrada exitosamente.');
    });
  }
}
