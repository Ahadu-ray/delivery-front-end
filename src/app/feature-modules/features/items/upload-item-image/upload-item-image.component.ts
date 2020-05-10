import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../item.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FileUploadService} from '../../../../shared/services/file-upload.service';

@Component({
  selector: 'app-upload-item-image',
  templateUrl: './upload-item-image.component.html',
  styleUrls: ['./upload-item-image.component.scss']
})
export class UploadItemImageComponent implements OnInit {
  uploadImageForm: FormGroup;
  submitted = false;
  itemId: number;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private notificationService: NotificationService,
    private fileUploadService: FileUploadService,
    public bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    this.uploadImageForm = this.fb.group({
      file: ['', Validators.required]
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
    this.fileUploadService.uploadImage(this.currentFileUpload, this.itemId).subscribe(event => {
      // change this when resp body is fixed
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        if (event.status === 200) {
          this.notificationService.success('Uploaded item image', 'Successful');
          this.bsModalRef.hide();
        } else {
          this.bsModalRef.hide();
          this.notificationService.error(`Couldn't upload image`, event.statusText);
        }
      }
    });
    this.selectedFiles = undefined;
  }
}

