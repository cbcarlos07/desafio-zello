import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { CadastroService } from './cadastro/cadastro.service';
import { Pessoa } from './home/pessoa.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Sair', url: '/login', icon: 'mail' },
  ];
  private buscandoLocalizcao: boolean = false
  public mostrarMenu: boolean = false
  
  constructor(private _router: Router,
              private _loginService: LoginService,  
              private backgroundGeolocation: BackgroundGeolocation,
              private _cadastroService: CadastroService,
    ) {
        
    }
    ngOnInit(): void {
        this.verificarMenu()
        this.escutaLogin()
    }

    retornarNome(){
        return localStorage.getItem('nome')
    }

    retornarPerfil(){
        return localStorage.getItem('perfil')
    }

    verificarMenu(){
        this.mostrarMenu = localStorage.getItem('menu') != undefined ? true : false
        console.log('mostrar', this.mostrarMenu);
        
    }

    
    sair(){
        localStorage.clear();
        this._router.navigate(['']);
        this.mostrarMenu = false;
    }

    escutaLogin(){
        this._loginService
            .avisoLogin
            .subscribe((response: boolean) => {
                localStorage.setItem('menu', '1')
                this.mostrarMenu = response
                console.log('escutaLogin', response);
                
                if( response ){
                    if( !this.buscandoLocalizcao ){
                        this.buscandoLocalizcao = true
                        this.buscarLocalicacao()
                    }
                }
                
            })
    }

    public buscarLocalicacao(){
        console.log('buscarLocalicacao');
        /*Geolocation.getCurrentPosition().then(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          });*/
        const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        };

        this.backgroundGeolocation.configure(config)
            .then(() => {

            this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
                const { latitude, longitude } = location
                console.log('latidude', latitude);
                console.log('longitude', longitude);
                const pessoa: Pessoa = {
                    latitude,
                    longitude,
                }
                
                const id = localStorage.getItem('id')
                this._cadastroService
                    .atualizar(Number(id), pessoa)
                    .subscribe((response: any)=>{
                        console.log('atualizado geolocation');
                        
                    })
            

            // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
            // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
            // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
            this.backgroundGeolocation.finish(); // FOR IOS ONLY
            });

        });

        // start recording location
        this.backgroundGeolocation.start();

        // If you wish to turn OFF background-tracking, call the #stop method.
        this.backgroundGeolocation.stop();
    }
}
