import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from "../../../pages-module/footer/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-get-custom-code',
    standalone: true,
    templateUrl: './get-custom-code.component.html',
    styleUrls: ['./get-custom-code.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, MatTooltipModule, FooterComponent]
})
export class GetCustomCodeComponent {
  showDetails: boolean = false;
  customCodeForm: FormGroup;
  fileUploaded: boolean = false;
  readonly REMOVE_FILE: string = 'Remove File';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.customCodeForm = this.formBuilder.group({
      requirement: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(20),
          Validators.maxLength(1000),
        ],
      ],
      referenceFile: [null],
    });
  }

  minLengthWithSpacesValidator(minLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value || '';
      const spaceCount: number = (value.match(/\s/g) || []).length;
      const actualLength: number = value.length - spaceCount;
      return actualLength < minLength ? { minlength: true } : null;
    };
  }

  referenceFile(event: any) {
    this.fileUploaded = false;
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;
      this.fileUploaded = true;
      if (fileType !== 'application/pdf' && !fileType.startsWith('image/')) {
        this.customCodeForm.get('referenceFile')?.setErrors({ invalidFile: true });
      } else if (fileSize > 3145728) {
        this.customCodeForm.get('referenceFile')?.setErrors({ invalidFileTypeOrSize: true });
      } else {
        const reader = new FileReader();

        reader.onload = () => {
          const fileContent = reader.result as string;
          this.customCodeForm.patchValue({
            referenceFile: {
              name: selectedFile.name,
              type: selectedFile.type,
              size: selectedFile.size,
              content: fileContent,
            },
          });
          
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }

  removeFile() {
    this.customCodeForm.get('referenceFile')?.reset();
    this.fileUploaded = false;
  }

  onSubmit(): void {
    if (this.customCodeForm.valid) {
      this.router.navigate(['/popup/#', 'submitted']);
    } else {
      this.customCodeForm.markAllAsTouched();
      this.router.navigate(['/popup/#', 'failure']);
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
