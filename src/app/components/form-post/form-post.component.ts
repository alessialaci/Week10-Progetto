import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-post',
    templateUrl: './form-post.component.html',
    styleUrls: ['./form-post.component.scss']
})

export class FormPostComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    registra(titolo: string, body: string, type: string, author: string) {
        if (titolo != "" && body != "" && type != "" && author != "") {
            let data = {
                body: body,
                title: titolo,
                active: true,
                type: type,
                author: author
            }
            this.addData(data);
            location.reload();
        }
    }

    addData(data: any) {
        fetch('http://localhost:3000/lista', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data),
        });
    }

}
