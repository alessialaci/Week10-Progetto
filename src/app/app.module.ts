import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { EvidenziatoDirective } from './directives/evidenziato.directive';
import { UtentiComponent } from './components/utenti/utenti.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { DettagliUtentiComponent } from './components/dettagli-utenti/dettagli-utenti.component';
import { FormPostComponent } from './components/form-post/form-post.component';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "formPost",
                component: FormPostComponent
            }
        ]
    },
    {
        path: "activePosts",
        component: ActivePostsComponent
    },
    {
        path: "inactivePosts",
        component: InactivePostsComponent
    },
    {
        path: "activePosts/:id",
        component: DettagliPostComponent
    },
    {
        path: "inactivePosts/:id",
        component: DettagliPostComponent
    },
    {
        path: "utenti",
        component: UtentiComponent,
        children: [
            {
                path: ":id",
                component: DettagliUtentiComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        HomeComponent,
        CardComponent,
        MaiuscoloPipe,
        EvidenziatoDirective,
        UtentiComponent,
        DettagliPostComponent,
        DettagliUtentiComponent,
        FormPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
