import { Component, OnInit } from '@angular/core';
import Dog from 'src/app/models/Dog';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  members: Dog[];

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.members = this.membersService.members;
  }

}
