import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appEvidenziato]'
})

export class EvidenziatoDirective {

    constructor(private el: ElementRef, private render: Renderer2) {
        render.setStyle(el.nativeElement, "backgroundColor", "yellow");
        render.setStyle(el.nativeElement, "color", "black");
    }
}
