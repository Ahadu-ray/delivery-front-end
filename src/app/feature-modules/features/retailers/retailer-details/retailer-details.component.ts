import {Component, OnInit} from '@angular/core';
import {RetailerModel} from '../retailer.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {environment} from '../../../../shared/api/config';
import {UploadItemImageComponent} from '../../items/upload-item-image/upload-item-image.component';
import {NotificationService} from '../../../../shared/services/notification.service';
import {UploadRetailerImageComponent} from '../upload-retailer-image/upload-retailer-image.component';

@Component({
  selector: 'app-retailer-details',
  templateUrl: './retailer-details.component.html',
  styleUrls: ['./retailer-details.component.scss']
})
export class RetailerDetailsComponent implements OnInit {
  retailer: RetailerModel;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    // use this on prod
    // this.retailer.imgUrl = window.location.origin + '/' + this.retailer.imgUrl;
    this.retailer.imgUrl = `${environment.fileUrl}/${this.retailer.imgUrl} `;
  }

  uploadImage(_id: number) {
    const initialState = {
      retailerId: _id
    };
    this.modalService.show(UploadRetailerImageComponent, {initialState});
    this.modalService.onHide.subscribe(value => {
      this.bsModalRef.hide();
    });
  }
}
