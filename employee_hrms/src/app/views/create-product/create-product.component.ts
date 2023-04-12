import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  categoryDropDown:any;
  productForm!:FormGroup;

  constructor(
    public _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productForm = this._fb.group({
      id: [0],
      name: [''],
      price: [''],
      quantity: [''],
      discount: [''],
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
    console.log(event)
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onSubmit(){
    console.log(this.productForm.value)
  }
}
