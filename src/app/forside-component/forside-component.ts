import { Component, OnInit, Inject, PLATFORM_ID,  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var intlTelInput: any;
@Component({
  selector: 'app-forside', // evt. ret til dette
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './forside-component.html', // <-- KORREKT!
  styleUrls: ['./forside-component.css'] 
})
export class ForsideComponent implements OnInit {
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // 👇 DARK MODE: Hent tidligere valg fra localStorage
      const savedMode = localStorage.getItem('theme');
      if (savedMode === 'dark') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      }

      // 👇 TYPEWRITER: Skriv navnet ud ét bogstav ad gangen
      const text = "Daniel Villena Askgaard";
const element = document.querySelector(".typewriter");
let index = 0;

function typeNextChar() {
  if (!element) return;

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeNextChar, 175); // Hastighed
  } else {
    setTimeout(() => {
      element.textContent = "";   // Nulstil teksten
      index = 0;                  // Start forfra
      typeNextChar();            // Start igen
    }, 2500); // Vent 2 sekunder før restart
  }
}
      typeNextChar();
    }
  }

  // 👇 DARK MODE: Skift mellem mørk og lys tilstand
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  const body = document.body;

  if (this.isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const input = document.querySelector("#phone") as HTMLInputElement;
      if (input) {
        intlTelInput(input, {
          initialCountry: "dk",
          utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
        });
      }
    }
  }
}