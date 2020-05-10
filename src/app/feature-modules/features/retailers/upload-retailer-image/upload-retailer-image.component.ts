import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../../items/item.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {FileUploadService} from '../../../../shared/services/file-upload.service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {RetailerService} from '../retailer.service';

@Component({
  selector: 'app-upload-retailer-image',
  templateUrl: './upload-retailer-image.component.html',
  styleUrls: ['./upload-retailer-image.component.scss']
})
export class UploadRetailerImageComponent implements OnInit {

  uploadImageForm: FormGroup;
  submitted = false;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
  retialerId: number;
  constructor(
    private fb: FormBuilder,
    private itemService: RetailerService,
    private notificationService: NotificationService,
    private fileUploadService: FileUploadService,
    public bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      image: ['', Validators.required]
    });
  }

  get f() {
    return this.uploadImageForm.controls;
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.submitted = true;
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileUploadService.uploadRetailerImage(this.currentFileUpload,this.retialerId).subscribe(event => {
      // change this when resp body is fixed
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        if (event.status === 200) {
          this.notificationService.success('Uploaded retailer image', 'Successful');
          this.bsModalRef.hide();
        } else {
          this.bsModalRef.hide();
          this.notificationService.error(`Couldn't upload retailer image`, event.statusText);
        }
      }
    });
    this.selectedFiles = undefined;
  }
}
