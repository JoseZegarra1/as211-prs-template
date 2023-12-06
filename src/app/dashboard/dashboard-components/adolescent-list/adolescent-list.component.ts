import { Component, OnInit } from '@angular/core';
import { AdolescentService } from 'src/app/adolescent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adolescent-list',
  templateUrl: './adolescent-list.component.html',
  styleUrls: ['./adolescent-list.component.scss']
})
export class AdolescentListComponent implements OnInit {
  adolescents: any[] = [];
  filteredAdolescents: any[] = [];
  showEditForm = false;
  editedAdolescent: any = {};
  filterByStatus: string = 'A';
  isDeleteButton: boolean = true;
  nameFilter: string = '';
  reportFormat: string = 'pdf';
  reportResult: string = '';

  constructor(private adolescentService: AdolescentService, private router: Router) { }

  ngOnInit(): void {
    this.adolescentService.getAdolescentList().subscribe(
      (data) => {
        this.adolescents = data;
        this.filteredAdolescents = data; // Agrega esta línea
        this.generateReport(); 
      },
      (error) => {
        console.error('Error al obtener la lista de adolescentes:', error);
      }
    );
  }


  loadAdolescents(): void {
    if (this.filterByStatus === 'A') {
      this.adolescentService.getAdolescentList().subscribe(data => {
        this.adolescents = data;
        this.filteredAdolescents = data;
      });
    } else if (this.filterByStatus === 'I') {
      this.adolescentService.getInactiveAdolescentList().subscribe(data => { // Asegúrate de usar getInactivePersonList()
        this.adolescents = data;
        this.filteredAdolescents = data;
      });
    } else {
      this.adolescentService.getAdolescentList().subscribe(data => {
        this.adolescents = data;
        this.filteredAdolescents = data;
      });
    }
  }

  openEditForm(adolescent: any): void {
    this.editedAdolescent = { ...adolescent };
    this.showEditForm = true;
  }

  closeEditForm(): void {
    this.showEditForm = false;
    this.editedAdolescent = {}; // Limpiar los datos editados
  }

  navigateToAdolescentForm(): void {
    this.router.navigate(['/adolescent-form']);
  }
  

  saveEditedAdolescent(): void {
    this.adolescentService.updateAdolescent(this.editedAdolescent.id, this.editedAdolescent).subscribe(() => {
      this.showEditForm = false;
      this.editedAdolescent = {};
      this.adolescentService.getAdolescentList().subscribe(data => {
         this.adolescents = data;
       });
    });
  }

  generateReport(): void {
    this.adolescentService.generateReport(this.reportFormat).subscribe(
      (result) => {
        this.reportResult = result;
        console.log('Informe generado correctamente:', result);
        // Puedes manejar el resultado según tus necesidades.
      },
      (error) => {
        console.error('Error al generar el informe:', error);
        // Puedes manejar el error según tus necesidades.
      }
    );
  }

  deleteAdolescent(id: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este adolescente?');
    if (confirmDelete) {
      this.adolescentService.deleteAdolescent(id).subscribe(() => {
        this.adolescentService.getAdolescentList().subscribe(data => {
        this.adolescents = data;
        });
      });
    }
  }


  restoreAdolescent(id: number): void {
    const confirmRestore = confirm('¿Estás seguro de que deseas restaurar este adolescente?');
    if (confirmRestore) {
      this.adolescentService.restoreAdolescent(id).subscribe(() => {
        this.loadAdolescents(); // Vuelve a cargar la lista después de restaurar
      });
    }
  }



  filterAdolescentsByStatus(): void {
    if (this.filterByStatus === 'A') {
      this.filteredAdolescents = this.adolescents.filter(adolescent => adolescent.active === 'yes');
      this.isDeleteButton = true; // Cuando se filtra por Activos, el botón debe ser "Eliminar"
    } else if (this.filterByStatus === 'I') {
      this.filteredAdolescents = this.adolescents.filter(adolescent => adolescent.active === 'no');
      this.isDeleteButton = false; // Cuando se filtra por Inactivos, el botón debe ser "Restaurar"
    }
    this.loadAdolescents();
  }


  filterAdolescentsByName(): void {
    console.log('Filtrando por nombre:', this.nameFilter);
  
    if (this.nameFilter) {
      this.filteredAdolescents = this.adolescents.filter(adolescent =>
        adolescent.name.toLowerCase().includes(this.nameFilter.toLowerCase())
      );
    } else {
      // If the name filter is empty, reset the list to the original state
      this.filteredAdolescents = this.adolescents.slice();
    }
  }
  




}


