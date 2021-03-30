import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach 1',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1973&q=80'
    },
    {
      title: 'At the Beach 2',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach 3',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach 4',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1432251407527-504a6b4174a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach 1',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1973&q=80'
    },
    {
      title: 'At the Beach 2',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach 3',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach 4',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1432251407527-504a6b4174a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
    }

  ];

  checkIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
