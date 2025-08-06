import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // ✅ Kun kør dette i browseren
    if (isPlatformBrowser(this.platformId)) {
      const text = "Daniel Villena Askgaard";
      const element = document.querySelector(".typewriter");
      let index = 0;

      function typeNextChar() {
        if (index < text.length && element) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeNextChar, 100);
        }
      }

      typeNextChar();
    }
  }
}
