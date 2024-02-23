import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  constructor() {}
  mobileName = 'XIAOMI';
  userDetails = [
    {
      name: 'Adeel Solangi',
      language: 'Sindhi',
      id: '1',
      bio: 'Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.',
      version: 6.1,
    },
    {
      name: 'Afzal Ghaffar',
      language: 'Sindhi',
      id: '2',
      bio: 'Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.',
      version: 1.88,
    },
    {
      name: 'Aamir Solangi',
      language: 'Sindhi',
      id: '3',
      bio: 'Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.',
      version: 7.27,
    },
    {
      name: 'Abla Dilmurat',
      language: 'Uyghur',
      id: '4',
      bio: 'Donec lobortis eleifend condimentum. Morbi ac tellus erat.',
      version: 2.53,
    },
  ];
  usersArray = new Subject()
  sendusers = ()=>{
    this.usersArray.next(this.userDetails)
  }
}
