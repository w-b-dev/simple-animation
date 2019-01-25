import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anim-about',
  template: `
    <h1>
      about works!
    </h1>
  `,
  styles: [
      `
      :host {
        flex: 1 1 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("assets/about-cover.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
