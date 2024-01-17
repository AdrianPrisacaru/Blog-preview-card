import { Component } from '@angular/core';
import { PostcardItem } from 'src/shared/models/postcardItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = [
    new PostcardItem('Learning'),
    new PostcardItem('Published 21 Dec 2023'),
    new PostcardItem('HTML & CSS foundations', true),
    new PostcardItem(
      'These languages are the backbone of every website, defining structure, content, and presentation'
    ),
    new PostcardItem('Greg Hooper'),
  ];
  title = 'my preview card';
}
