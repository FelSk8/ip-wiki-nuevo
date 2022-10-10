import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  dataSource: any= [ ];
  displayedColumns: string[] = ['id', 'email', 'password', 'actions'];
  constructor(
    private usuariosSvc: UsuariosService

  ) { }

  ngOnInit(): void {
    this.usuariosSvc.getAllUsuarios().subscribe(res => {
      console.log(res);
    });
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosSvc.getAllUsuarios().subscribe((usuarios:any[]) => {
      this.dataSource = new MatTableDataSource<any>(usuarios);
    });
  }

  onDelete(id: string): void {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosSvc.delete(id).subscribe(res => {
          console.log(res);
          this.getUsuarios();
        });
        Swal.fire(
          '¡Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        )
      }
    } )
  }
   /* console.log(id);
    this.productSvc.delete(id).subscribe(res => {
      console.log(res);
      this.getProducts();
    });*/
  
   
  onEdit(id: string): void {
    console.log(id);  

    

} 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
