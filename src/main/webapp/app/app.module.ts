import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { CorecmjanSharedModule, UserRouteAccessService } from './shared';
import { CorecmjanAppRoutingModule} from './app-routing.module';
import { CorecmjanHomeModule } from './home/home.module';
import { CorecmjanAdminModule } from './admin/admin.module';
import { CorecmjanAccountModule } from './account/account.module';
import { CorecmjanEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        CorecmjanAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        CorecmjanSharedModule,
        CorecmjanHomeModule,
        CorecmjanAdminModule,
        CorecmjanAccountModule,
        CorecmjanEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class CorecmjanAppModule {}
