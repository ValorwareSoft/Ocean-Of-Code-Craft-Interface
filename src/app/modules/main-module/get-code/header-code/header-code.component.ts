import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header-code',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './header-code.component.html',
  styleUrls: ['./header-code.component.scss']
})
export class HeaderCodeComponent {
  htmlCode: string = ''; 
  tsCode: string = '';
  scssCode: string = '';

  showHtml: boolean = false;
  showTs: boolean = false;
  showScss: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.toggleGetCode();
    // Fetch code files when the component initializes
  }

  toggleReview() {
    // Logic to toggle review section
  }

  toggleGetCode() {
    this.showHtml = true;
    this.showTs = true;
    this.showScss = true;

    this.fetchHtmlCode();
    this.fetchTsCode();
    this.fetchScssCode();
  }

  fetchHtmlCode() {
    this.http.get('assets/code-files/test1.html', { responseType: 'text' })
      .subscribe(
        (data: string) => {
          console.log("HTML DATA: ", data);
          this.htmlCode = data;
        },
        (error) => {
          console.error("Error fetching HTML:", error);
        }
      );
  }

  
  
  

  fetchTsCode() {
    this.http.get('assets/code-files/test1.ts', { responseType: 'text' })
      .subscribe((data: string) => {
        this.tsCode = data;
      });
  }

  fetchScssCode() {
    this.http.get('assets/code-files/test1.scss', { responseType: 'text' })
      .subscribe((data: string) => {
        this.scssCode = data;
      });
  }
}
