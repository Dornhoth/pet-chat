import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import Pet from 'src/app/models/Pet';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  members: Pet[];

  constructor(
    private membersService: MembersService,
  ) { }

  ngOnInit() {
    this.members = this.membersService.members;
  }
}
