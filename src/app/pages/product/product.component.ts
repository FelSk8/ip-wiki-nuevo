import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductI } from './product';
import { ProductService } from './product.service';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  dataSource: any= [ ];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  constructor(
    private productSvc: ProductService
  ) { }

  ngOnInit(): void {
    this.productSvc.getAllProducts().subscribe(res => {
      console.log(res)
    });
    this.getProducts();
    
  }

  getProducts(): void {
    this.productSvc.getAllProducts().subscribe((products:ProductI[]) => {
      this.dataSource = new MatTableDataSource<ProductI>(products);
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
        this.productSvc.delete(id).subscribe(res => {
          console.log(res);
          this.getProducts();
        });
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado.',
          'success'
        )
      }
    })
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



