import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { getUsers } from 'src/app/service/utenti.service';

@Component({
    selector: 'app-utenti',
    templateUrl: './utenti.component.html',
    styleUrls: ['./utenti.component.scss']
})

export class UtentiComponent implements OnInit {

    users!: User[];

    constructor() { }

    ngOnInit(): void {
        getUsers().then(users => {
            this.users = users;
        })
    }

}
