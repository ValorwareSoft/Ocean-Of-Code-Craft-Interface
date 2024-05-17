import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  showDetails: boolean = false;
  customCodeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.customCodeForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$'
          ),
        ],
      ],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')],
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
    const selectedFile = event.target.files;

    if (selectedFile && selectedFile.length > 0) {
      const fileType = selectedFile[0].type;

      if (
        fileType !== 'application/pdf' && !fileType.startsWith('image/')
      ) {
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
