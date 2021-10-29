import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {  ActionSheetController, ToastController, AlertController  } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../home/pessoa.model';
import { LoginService } from '../login/login.service';
import { CadastroService } from './cadastro.service';
import { Perfil } from './perfil.model';
import { PerfilService } from './perfil.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
    formCad: FormGroup;
    foto: string
    showPassword: boolean = false;
	passwordType = 'password'
    mostrarSenha = true
    errorCpf: boolean = false;
    title: string = 'Registrar'
    id: number = 0;
    textoBotao: string = 'Cadastrar'
    perfis: Perfil[] = []
    @ViewChild('termos') termos: any
    cpfDisabled: boolean = false;
    constructor(private _camera: Camera,
                private actionSheetController: ActionSheetController,
                private _cadastroService: CadastroService,
                private _router: Router,
                private _activateRoter: ActivatedRoute,
                private _toastController: ToastController,
                private _alertController: AlertController,
                private _perfilService: PerfilService,
                private _loginService: LoginService,) { }
    async ngOnInit() {
        this.id = this._activateRoter.snapshot.params['id'] || 0
        this.verificarMenu()
        this.formCad = new FormGroup({
            cpf: new FormControl('', {validators: [Validators.required]}),
            nome: new FormControl('', {validators: [Validators.required]}),
            dataNascimento: new FormControl('', {validators: [Validators.required]}),
            rg: new FormControl('', {validators: [Validators.required]}),
            senha: new FormControl('', {validators: [Validators.required]}),
            foto: new FormControl('' ),
            perfil: new FormControl(0)
        });
        await this.buscarPerfis()
        if( this.id > 0 )
            this.buscarPessoa()

        
    }

    public salvarItem(): void{
        if( this.id > 0 ){
            this.atualizar()
        }else{
            this.salvar()
        }
        
    }

    public buscarPerfis(){
        return new Promise((resolve, reject)=>{
            this._perfilService.buscarTodos()
                .subscribe((_perfis: Perfil[])=>{
                    this.perfis = _perfis;
                    resolve({})
                })
            
        })
    }

    public atualizar(){
        this._cadastroService
            .atualizar(this.id, this.formCad.value)
            .subscribe((response: any )=>{
                this.formCad.reset()
                this._router.navigate(['/home'])
                this._cadastroService.ativarNovaBusca(true)
            })
    }

    public salvar(): void{
        this._cadastroService
            .cadastrar( this.formCad.value )
            .subscribe((response: any)=>{
                this.formCad.reset()
                this._router.navigate(['/home'])
                this._cadastroService.ativarNovaBusca(true)
            })
    }

    public async adicionarFoto(){
        const actionSheet = await this.actionSheetController.create({
			header: 'Escolha uma ação',
			cssClass: 'my-custom-class',
			buttons: [
				{
					text: 'Tirar Foto',
					role: 'destructive',
					icon: 'camera-outline',
					handler: () => {
						this.tirarFoto()
					}
				},
				{
					text: 'Escolher Foto',
					icon: 'image-outline',
					handler: () => {
						this.pegarGaleria()
					}
				}
			]
		});
		await actionSheet.present();
    }

    public verificarCPF( cpf: any ): void{
        if( cpf != '' ){
            this._cadastroService
                .verificarCPF(cpf)
                .subscribe((response: number) => {
                    if( response > 0 ){
                        this.errorCpf = true
                    }else{
                        this.errorCpf = false
                    }
                    
                })

        }
    }

    public tooglePassword() {
		this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
		this.showPassword = !this.showPassword
	}

    tirarFoto(){
		const options: CameraOptions = {
			quality: 50,
			destinationType: this._camera.DestinationType.DATA_URL,
			encodingType: this._camera.EncodingType.JPEG,
			mediaType: this._camera.MediaType.PICTURE,
			correctOrientation: true
		}
			
		this._camera.getPicture(options).then((imageData) => {
			
			this.foto = `data:image/jpeg;base64,${imageData}`;
			
			this.formCad.controls.foto.setValue( this.foto )
			}, (err) => {
				// Handle error
		});
	}

	pegarGaleria(){
		const options: CameraOptions = {
			quality: 50,
			destinationType: this._camera.DestinationType.DATA_URL,
			sourceType: this._camera.PictureSourceType.PHOTOLIBRARY,
			saveToPhotoAlbum: false,
			correctOrientation: true
		}

		this._camera.getPicture(options).then((imageData) => {
			
			this.foto = `data:image/jpeg;base64,${imageData}`;
			
			this.formCad.controls.clie_foto.setValue( this.foto )
			}, (err) => {
				// Handle error
		});

	}

    buscarPessoa(){
        this._cadastroService
            .buscarPorId(this.id)
            .subscribe((pessoa: Pessoa) => {
                const { foto, perfil } = pessoa
                this.formCad.controls.cpf.setValue( pessoa.cpf )
                this.formCad.controls.dataNascimento.setValue( pessoa.dataNascimento )
                this.formCad.controls.foto.setValue( pessoa.foto )
                this.formCad.controls.nome.setValue( pessoa.nome )
                this.formCad.controls.rg.setValue( pessoa.rg )
                this.title = 'Editar Registro'
                this.textoBotao = 'Atualizar'
                if( foto && foto != '' ){
                    this.foto = `${environment.host}/foto/${foto}`
                }
                console.log(pessoa);
                
                const _perfil = this.perfis.findIndex( i => i.id === Number(perfil) )
                this.formCad.get('senha').setValidators(null)
                this.formCad.controls.perfil.setValue( this.perfis[ _perfil ].id )
                this.termos.checked = true
                this.cpfDisabled = true

                
            })
    }

    public remover(){
        this._cadastroService
            .remove(this.id)
            .subscribe((response: any)=>{
                this.presentToast('Pessoa removida com sucesso!')
                this._router.navigate(['/home'])
            })
    }

    private async presentToast(msg: string) {
        const toast = await this._toastController.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }

    public async perguntaRemover() {
        const alert = await this._alertController.create({
          header: 'Atenção',
          message: `
              <p>Deseja realmente remover este cadastro?</p> 
              `,
          cssClass: 'alerta-msg',
          buttons: [
            {
              text: 'Sim',
              cssClass: 'primary',
              handler: () => {
                this.remover()
              }
            }, {
              text: 'Não',
              role: 'cancel',
              handler: () => {
                  
                  
              }
            }
          ]
        });
    
        let alerta = await alert.present();
    }

    public verificarMenu(){
        this._loginService.verificaMenu()
    }

    
    
}
