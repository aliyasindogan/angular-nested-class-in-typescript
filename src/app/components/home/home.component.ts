import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  datas:any;
  constructor() {}

  ngOnInit(): void {
     this.datas = new UserDto(
      { firstName: 'Ali Yasin', lastName: 'DOĞAN', userName: 'aliyasin' },
      [
        {
          addressDetail: 'İstanbul/Türkiye',
          city: 'İstanbul',
          country: 'Türkiye',
        },
        {
          addressDetail: 'Rize/Türkiye',
          city: 'Rize',
          country: 'Türkiye',
        }
      ],
      { cardID: '12345679', cardTypeID: 1 }
    );

    console.log(this.datas);
  }
}
