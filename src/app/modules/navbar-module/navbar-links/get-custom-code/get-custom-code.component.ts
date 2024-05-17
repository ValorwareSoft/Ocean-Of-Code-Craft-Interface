import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
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
  fileUploaded: boolean = false;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.customCodeForm = this.formBuilder.group({
      requirement: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(1000),
        ],
      ],
      referenceFile: [''],
    });
  }

  referenceFile(event: any) {
    this.fileUploaded = false;
    const selectedFile = event.target.files;
    if (selectedFile && selectedFile.length > 0) {
      this.fileUploaded = true;
      const fileType = selectedFile[0].type;
      if (fileType !== 'application/pdf' && !fileType.startsWith('image/')) {
        this.customCodeForm
          .get('referenceFile')
          ?.setErrors({ invalidFile: true });
      }
      if (selectedFile[0].size > 3145728) {
        this.customCodeForm
          .get('referenceFile')
          ?.setErrors({ invalidFileTypeOrSize: true });
      }
    }
  }

  removeFile() {
    this.customCodeForm.get('referenceFile')?.reset();
    this.fileUploaded = false;
  }

  onSubmit(): void {
    if (this.customCodeForm.valid) {
      this.toastr.success('Request Submitted Successfully');
      console.log('Form values:', this.customCodeForm.value);
    } else {
      this.customCodeForm.markAllAsTouched();
      this.toastr.error('Please Fill The Form Properly');
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
