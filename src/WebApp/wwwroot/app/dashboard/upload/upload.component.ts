import { Component } from '@angular/core';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
/**
*	This class represents the lazy loaded HomeComponent.
*/


const URL = 'http://localhost:55532/api/upload';

@Component({
	moduleId: module.id,
	selector: 'upload-file',
	templateUrl: 'upload.component.html'
})

export class UploadComponent {

	public uploader:FileUploader = new FileUploader({
		url: URL,
		maxFileSize:  1024 * 1024 * 12,
		isHTML5: true,
		allowedMimeType: ['image/gif', 'image/png', 'image/jpeg']
	});

	public hasBaseDropZoneOver:boolean = false;
	public hasAnotherDropZoneOver:boolean = false;



	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}
}