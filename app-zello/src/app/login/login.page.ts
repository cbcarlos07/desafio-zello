import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	formLogin: FormGroup;
	showPassword: boolean = false;
	passwordType = 'password'
	constructor() { }
	
	ngOnInit() {
		this.formLogin = new FormGroup({
			cpf: new FormControl( '', {validators: [Validators.required]}),
			senha: new FormControl( '', {validators: [Validators.required]})
		})
	}

	goToRegister(){}

	abrirModalEsqueci(){}

	tooglePassword() {
		this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
		this.showPassword = !this.showPassword
	}

	efetuarLogin(){
		this.logar( this.formLogin.value );
	
	}

	logar(dados: any){

	}
	
}
