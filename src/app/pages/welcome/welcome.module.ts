import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzCascaderModule,
    FormsModule,
    NzIconModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
