import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode = true; // Default to dark mode

  constructor(private rendererFactory: RendererFactory2) {
    this.applyTheme(); // Apply theme on service initialization
  }

  get isDarkMode() {
    return this._darkMode;
  }

  toggleDarkMode() {
    this._darkMode = !this._darkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const renderer = this.rendererFactory.createRenderer(null, null);
    const body = document.getElementsByTagName('body')[0];

    if (this._darkMode) {
      renderer.removeClass(body, 'light-theme');
      renderer.addClass(body, 'dark-theme');
    } else {
      renderer.removeClass(body, 'dark-theme');
      renderer.addClass(body, 'light-theme');
    }
  }
}
