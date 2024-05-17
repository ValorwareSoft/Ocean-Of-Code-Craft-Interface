import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-custom-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './get-custom-code.component.html',
  styleUrls: ['./get-custom-code.component.scss'],
})
export class GetCustomCodeComponent {
  showDetails: boolean = false;
  customCodeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr : ToastrService) {
    this.customCodeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]+$')]],
      lastName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]+$')]],
      emailAddress: ['', [Validators.required, Validators.pattern('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$')]],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')],
      requirement: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
      referenceFile: ['', [this.validateFileType]]
    });
  }

  validateFileType(control: any): { [key: string]: any } | null {
    const file = control.value;
    if (file instanceof File) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
      const fileNameParts = file.name.split('.');
      if (fileNameParts.length === 1) {
        return { 'invalidFile': true };
      }
      const extension = fileNameParts.pop()?.toLowerCase();
      if (!extension || allowedExtensions.indexOf(extension) === -1 || file.type.startsWith('video')) {
        return { 'invalidFileTypeOrSize': true };
      }
  
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        return { 'invalidFileTypeOrSize': true };
      }
    }
    return null;
  }
  
  
  
  
  



  onSubmit(): void {
    if (this.customCodeForm.valid) {
      this.toastr.success("Request Submitted Successfully");
      console.log('Form values:', this.customCodeForm.value);
    } else {
      this.customCodeForm.markAllAsTouched();
      this.toastr.error("Please Fill The Form Properly");
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
