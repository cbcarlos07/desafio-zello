import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	formLogin: FormGroup;
	showPassword: boolean = false;
	passwordType = 'password'
	constructor(private _loginService: LoginService, 
                private _router: Router,
                private _toastController: ToastController) { }
	
	ngOnInit() {
		this.formLogin = new FormGroup({
			cpf: new FormControl( '', {validators: [Validators.required]}),
			senha: new FormControl( '', {validators: [Validators.required]})
		})
        this.esconderMenu()
	}

	goToRegister(){}

    public esconderMenu(){
        this._loginService.emitLogin(false)
    }

	abrirModalEsqueci(){}

	tooglePassword() {
		this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
		this.showPassword = !this.showPassword
	}

	efetuarLogin(){
        this._loginService.auth(this.formLogin.value)
            .subscribe((response: any)=>{
                const { pessoa, perfil }  = response;
                localStorage.setItem('nome', pessoa.nome)
                localStorage.setItem('cpf', pessoa.cpf)
                localStorage.setItem('foto', pessoa.foto)
                localStorage.setItem('id', pessoa.id)
                localStorage.setItem('id_perfil', perfil.id)
                localStorage.setItem('perfil', perfil.nome)
                //sessionStorage.setItem('pessoa')
                this._router.navigate(['/home'])
                this._loginService.emitLogin(true)
                
            },
            err => {
                console.log('error', err.error.error[0]);
                this.presentToast(err.error.error[0])
                
            }
            )
	
	}

    async presentToast(msg) {
        const toast = await this._toastController.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }

	
}
