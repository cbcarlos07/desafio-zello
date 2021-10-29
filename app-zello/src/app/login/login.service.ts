import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private ws: string
    public avisoLogin = new EventEmitter<boolean>();
	constructor(private _http: HttpClient) { 
		this.ws = `${environment.host}`
	}

	auth(dados: Login){
		return this._http.patch( `${this.ws}/auth`, dados )
	}

    public verificaMenu(){
        const estaLogado = localStorage.getItem('menu') != undefined ? true : false
        this.emitLogin(estaLogado)
    }

    emitLogin(aviso: boolean){
        this.avisoLogin.emit(aviso);
    }

	

}
