import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { getUsers } from 'src/app/service/utenti.service';

@Component({
    selector: 'app-dettagli-utenti',
    templateUrl: './dettagli-utenti.component.html',
    styleUrls: ['./dettagli-utenti.component.scss']
})

export class DettagliUtentiComponent implements OnInit {

    u: User | undefined;

    constructor(private ar: ActivatedRoute) {}

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"];
        getUsers().then((users: User[]) => {
            this.u = users.find((element) => {
                if(x == element.id) {
                    return true;
                } else {
                    return false;
                }
            })
        })
    }

}
