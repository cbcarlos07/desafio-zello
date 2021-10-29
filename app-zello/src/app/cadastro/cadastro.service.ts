import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../home/pessoa.model';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {
    public novaBusca = new EventEmitter<boolean>();
  
    private ws: string
	constructor(private _http: HttpClient) { 
		this.ws = `${environment.host}/${environment.endpoint}/pessoa`
	}

	public cadastrar( pessoa: Pessoa ): Observable<any>{
		return this._http.post<any>( `${this.ws}`, pessoa )
	}

    public ativarNovaBusca(novaBusca: boolean): void{
        this.novaBusca.emit(novaBusca)
    }

    public atualizar(id: number, pessoa: Pessoa): Observable<any>{
        return this._http.put<any>( `${this.ws}/${id}`, pessoa )
    }

	public verificarCPF( cpf: string ): Observable<number>{
		return this._http.get<number>( `${this.ws}/cpf/${cpf}` )
	}

    public buscarPorId(id: number): Observable<Pessoa> {
        return this._http.get<Pessoa>( `${this.ws}/${id}`)
    }

    public remove(id: number): Observable<void> {
        return this._http.delete<void>( `${this.ws}/${id}`)
    }


}
