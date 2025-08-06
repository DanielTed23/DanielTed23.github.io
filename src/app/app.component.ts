import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
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
