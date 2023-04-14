import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  categoryDropDown:any;
  productForm!:FormGroup;
  fileData:any = new FormData();

  constructor(
    public _fb: FormBuilder,
    private dashboardService:DashboardService
  ) { }

  ngOnInit(): void {
    this.productForm = this._fb.group({
      id: [0],
      name: ['',Validators.required],
      price: ['',Validators.required],
      quantity: ['',Validators.required],
      discount: ['',Validators.required],
      category: [''],
    });
    this.categoryDropDown = [
      {
        name: 'Fruit',
        code: '0'
      },
      {
        name: 'Nut',
        code: '1'
      },
    ];
  }

  onUpload(event:any) {
    console.log(event.target.files[0])
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    this.fileData.append('file',event.target.files[0]);
    // document.getElementById('file_id')?.innerHTML = event.target.files[0].name;
  }

  onSubmit(){
    console.log(this.productForm.value)
    if(this.productForm.valid){
      let value = this.productForm.value;
      this.fileData.append('category',JSON.stringify(value.category));
      this.fileData.append('discount',value.discount);
      this.fileData.append('id',value.id);
      this.fileData.append('name',value.name);
      this.fileData.append('price',value.price);
      this.fileData.append('quantity',value.quantity);
      this.dashboardService.createProduct(this.fileData).subscribe((response)=>{
        console.log(response);
        
      });
    } else{

    }
  }

  get name(){
    return this.productForm.get('name');
  } 
  get price(){
    return this.productForm.get('price');
  } 
  get quantity(){
    return this.productForm.get('quantity');
  } 
  get discount(){
    return this.productForm.get('discount');
  } 
}
