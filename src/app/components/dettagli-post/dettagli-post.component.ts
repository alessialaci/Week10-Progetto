import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-dettagli-post',
    templateUrl: './dettagli-post.component.html',
    styleUrls: ['./dettagli-post.component.scss']
})

export class DettagliPostComponent implements OnInit {
    p: Post | undefined
    constructor(private ar: ActivatedRoute) {
    }

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"];
        getPosts().then((posts: Post[]) => {
            this.p = posts.find((element) => {
                if (x == element.id) {

                    return true;
                } else {
                    return false;
                }
            })
        })
    }

}

