import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maiuscolo'
})

export class MaiuscoloPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): string {
        const maiuscolo = value.toUpperCase();
        return maiuscolo;
    }

}
