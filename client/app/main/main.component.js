import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'main',
    template: require('./main.pug'),
    styles: [require('./main.scss')],
})
export class MainComponent {
    Http;

    awesomeThings = [];


    static parameters = [Http];
    constructor(http) {
        this.Http = http;
    }

    ngOnInit() {
        return this.Http.get('/api/things')
            .map(res => res.json())
            // .catch(err => Observable.throw(err.json().error || 'Server error'))
            .subscribe(things => {
                this.awesomeThings = things;
            });
    }
}
