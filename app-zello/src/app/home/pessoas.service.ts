import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa.model';

@Injectable({
    providedIn: 'root'
})
export class PessoasService {
    private ws: string
	constructor(private _http: HttpClient) { 
		this.ws = `${environment.host}/${environment.endpoint}/perfil-pessoa`
	}

	public listarTodos(): Observable<Pessoa[]>{
		return this._http.get<Pessoa[]>( `${this.ws}/list` )
	}
}
