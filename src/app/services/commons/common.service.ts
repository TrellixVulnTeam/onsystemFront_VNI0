import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NavigationEnum } from 'src/app/model/enums/navigation.enum';


@Injectable({
    providedIn: 'root',
})
export class CommomService {

    constructor(private router: Router){}

    getRoute() : string {
        return this.router.url
    }

    navigate(path: String){
        this.router.navigate([path])
    }

    navigateByUrl(url: string){
        this.router.navigateByUrl(url)
    }

    navigateWithParams(path: String, param: any){
        this.router.navigate([path, param])
    }

    getMenuOptions(): MenuItem[]{
        return [
            {
              label:'Dashboard',
              icon:'pi pi-fw pi-chart-line',
              routerLink: [NavigationEnum.DASHBOARD]
          },
          {
             label:'Ocorrências',
             icon:'pi pi-fw pi-map-marker',
             items:[
                {
                   label:'Novo',
                   icon:'pi pi-fw pi-plus',
                   routerLink: [NavigationEnum.NOVA_OCORRENCIA]
                   
                },
                {
                   label:'Listar Ocorrências',
                   icon:'pi pi-fw pi-list',
                   routerLink: [NavigationEnum.LISTAR_OCORRENCIAS]
                }
             ]
          },
          {
             label:'Clientes',
             icon:'pi pi-fw pi-users',
             items:[
              {
                 label:'Novo',
                 icon:'pi pi-fw pi-plus',
                 routerLink: [NavigationEnum.ADICIONAR_CLIENTES]
              },
              {
                 label:'Listar Clientes',
                 icon:'pi pi-fw pi-list',
                 routerLink: [NavigationEnum.LISTAR_CLIENTES]
              }
           ]
          },
          {
             label:'Prestadores',
             icon:'pi pi-fw pi-id-card',
             items:[
              {
                 label:'Novo',
                 icon:'pi pi-fw pi-plus',
                 routerLink: [NavigationEnum.ADICIONAR_PRESTADORES]
              },
              {
                 label:'Listar Prestadores',
                 icon:'pi pi-fw pi-list',
                 routerLink: [NavigationEnum.LISTAR_PRESTADORES]
              }
           ]
          },
          {
            label:'Usuários',
            icon:'pi pi-fw pi-user',
            items:[
               {
                  label:'Novo',
                  icon:'pi pi-fw pi-plus',
               },
               {
                  label:'Listar Usuários',
                  icon:'pi pi-fw pi-list'
               }
            ]
         },
          {
             label:'Logoff',
             icon:'pi pi-fw pi-power-off'
          }
      ];
    }
}