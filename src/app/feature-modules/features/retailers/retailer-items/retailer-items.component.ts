import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../../items/item.model';
import {ItemService} from '../../items/item.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AddItemsComponent} from '../add-items/add-items.component';
import {UploadItemImageComponent} from '../../items/upload-item-image/upload-item-image.component';
import {environment} from '../../../../shared/api/config';

@Component({
  selector: 'app-retailer-items',
  templateUrl: './retailer-items.component.html',
  styleUrls: ['./retailer-items.component.scss']
})
export class RetailerItemsComponent implements OnInit {

  items: Item[];
  retailerId: string;

  constructor(
    private itemService: ItemService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.retailerId = this.activatedRoute.snapshot.paramMap.get('retailerId');
    this.listItems(this.retailerId);
  }

  listItems(retailerId) {
    this.itemService.listItemsByRetailer(retailerId).subscribe(result => {
      if (result) {
        // change response when resp body is fixed
        if (result.status === 200) {
          // console.log(result);
          this.items = result.body.filter(item => item.imgUrl = `${environment.fileUrl}` + item.imgUrl);
        } else {
          this.notificationService.error(`Couldn't list retailer Items items`, result.statusText);
        }
      }
    });
  }

  addItem() {
    const initialState = {
      retailerId: this.retailerId
    };
    this.modalService.show(AddItemsComponent, {initialState});
    this.modalService.onHide.subscribe(value => {
      this.listItems(this.retailerId);
    });
  }


  uploadImage(_id: number) {
    const initialState = {
      itemId: _id
    };
    this.modalService.show(UploadItemImageComponent, {initialState});
    this.modalService.onHide.subscribe(value => {
      this.listItems(this.retailerId);
    });
  }
}
