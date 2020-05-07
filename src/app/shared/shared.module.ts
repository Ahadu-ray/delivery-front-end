import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxModuleModule} from './ngx-module.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgxModuleModule,
    NgbPaginationModule,
  ],
  declarations: [
  ],
  exports: [NgxModuleModule, FormsModule, ReactiveFormsModule, NgbPaginationModule,
    ]
})
export class SharedModule {
}
