import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Agrega la clase "loaded" después de un breve retraso (por ejemplo, 500 ms)
    setTimeout(() => {
      const errorContainer = document.querySelector('.error-container');
      if (errorContainer) {
        errorContainer.classList.add('loaded');
      }
    }, 500);
  }
}
