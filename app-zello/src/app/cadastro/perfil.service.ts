import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from './perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

    private ws: string
	constructor(private _http: HttpClient) { 
		this.ws = `${environment.host}/${environment.endpoint}/perfil`
	}

    public buscarTodos(): Observable<Perfil[]>{
        return this._http.get<Perfil[]>(this.ws)
    }
}
