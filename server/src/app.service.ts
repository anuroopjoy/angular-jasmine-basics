import { Injectable } from '@nestjs/common';

const userMap = {
  admin: 'admin',
};
@Injectable()
export class AppService {
  getCities(): { name: string; image: string; alt: string }[] {
    return [
      {
        name: 'trulli',
        image: 'pic_trulli.jpg',
        alt: 'Italian Trulli',
      },
      {
        name: 'chania',
        image: 'img_chania.jpg',
        alt: 'Chania',
      },
    ];
  }
  login({ username, password }): boolean {
    if (userMap[username] === password) return true;
    return false;
  }
}
