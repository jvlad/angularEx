import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class FetcherFromRemoteServer {
    constructor(private http: HttpClient) { }

    getDayOfSuccess() {
        this.http.get("http://<URL>", (resultObject) => {
            resultObject.result
        })

        return this.http.get("https://run.mocky.io/v3/0df24db9-5799-4ab6-88b1-2382dee0bed5")
            .subscribe(resultObj => {})
    }
}
