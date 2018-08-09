import { NgModule } from '@angular/core';

import { BuildSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BuildSampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BuildSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BuildSampleSharedCommonModule {}
