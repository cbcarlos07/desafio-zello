import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CadastroService } from '../cadastro/cadastro.service';
import { LoginService } from '../login/login.service';
import { Pessoa } from './pessoa.model';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    pessoas: Pessoa[] = []
    constructor(private _pessoasService: PessoasService, 
                private _router: Router,
                private _loginService: LoginService,
                private _cadastroService: CadastroService,) { }

    ngOnInit() {
        this.verificarMenu()
        this.listarTodos()
        this.novaBusca()

    }

    public listarTodos(){
        this._pessoasService
            .listarTodos()
            .subscribe((_pessoa: Pessoa[]) => {
                this.pessoas = _pessoa
            })
    }

    novaBusca(){
        this._cadastroService
            .novaBusca
            .subscribe((response: boolean) => {
                this.listarTodos()
            })
    }

    public loadData(event){
        
    }

    public verificarMenu(){
        this._loginService.verificaMenu()
    }

    public novo(){
        this._router.navigate(['/cadastro'])
    }

    public mostrarCadastro(id: number): void{
        this._router.navigate(['/cadastro', id])
    }

}
