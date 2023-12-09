import { Component } from '@angular/core';
import { AdolescentService } from 'src/app/adolescent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adolescent-form',
  templateUrl: './adolescent-form.component.html',
  styleUrls: ['./adolescent-form.component.scss']
})
export class AdolescentFormComponent {
  newAdolescent: any = {
    condition: 'A'
  };

  constructor(private adolescentService: AdolescentService, private router: Router) { }

  formatDate(dateString: string): string {
    const [day, month, year] = dateString.split('-');
    return `${year}-${month}-${day}`;
  }

  navigateToAdolescentList(): void {
    this.router.navigate(['/adolescent-list']);
  }

  submitForm() {
    // Validar que los campos no contengan números
    if (/\d/.test(this.newAdolescent.name) || /\d/.test(this.newAdolescent.type) ||
      /\d/.test(this.newAdolescent.beneficiary) || /\d/.test(this.newAdolescent.responsible) 
      || /\d/.test(this.newAdolescent.level)) {
      alert('Los campos Name, Type, Beneficiary y Responsible no deben contener números.');
      return;
    }

    this.newAdolescent.startDate = this.formatDate(this.newAdolescent.startDate);
    this.newAdolescent.endDate = this.formatDate(this.newAdolescent.endDate);


    this.adolescentService.saveAdolescent(this.newAdolescent).subscribe(() => {
      this.newAdolescent = {
        condition: 'A'
      };
      alert('Adolescente registrada exitosamente.');
    });
  }
}
