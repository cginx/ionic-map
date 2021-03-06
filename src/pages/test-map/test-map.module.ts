import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestMapPage } from './test-map';
import { GaodeMapComponentModule } from '../../components/gaode-map/gaode-map.module';
import { BaiduMapComponentModule } from '../../components/baidu-map/baidu-map.module';

@NgModule({
  declarations: [
    TestMapPage,
  ],
  imports: [
    BaiduMapComponentModule,
    GaodeMapComponentModule,
    IonicPageModule.forChild(TestMapPage),
  ],
})
export class TestMapPageModule {}
