import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipperDto} from "../models/tipperdto";
import {MatchDto} from "../models/matchdto";
import {TippDto} from "../models/tippdto";

@Injectable()
export class TippsService {

  private url = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getTippers(): Promise<TipperDto[]> {
    return this.http.get<TipperDto[]>(`${this.url}/Tips/TipperNames`).toPromise();
  }

  getMatchResults(): Promise<MatchDto[]> {
    return this.http.get<MatchDto[]>(`${this.url}/Tips/MatchResults`).toPromise();
  }

  getTipps(tipperId: number): Promise<TippDto> {
    return this.http.get<TippDto>(`${this.url}/Tips/Tipps/${tipperId}`).toPromise();
  }
}
