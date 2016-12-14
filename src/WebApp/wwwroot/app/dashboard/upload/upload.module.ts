import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
//import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { FileSelectDirective, FileDropDirective, FileUploader  } from 'ng2-file-upload/ng2-file-upload';




@NgModule({
    imports: [CommonModule],
    declarations: [UploadComponent, FileSelectDirective, FileDropDirective],
    exports: [UploadComponent],
})

export class UploadModule { }