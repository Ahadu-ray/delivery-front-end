import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {Item} from '../item.model';
import {BsModalService} from 'ngx-bootstrap/modal';
import {UploadItemImageComponent} from '../upload-item-image/upload-item-image.component';
import {environment} from '../../../../shared/api/config';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Item[];
  fileUrl: string;
  constructor(
    private itemService: ItemService,
    private modalservice: BsModalService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.fileUrl = `${environment.fileUrl}`;
    this.listItems();
  }

  listItems() {
    // change list pagination when count is added to resp body
    this.itemService.listItems().subscribe(result => {
      if (result) {
        // change response when resp body is fixed
        if (result.status === 200) {
          // console.log(result);
          this.items = result.body.filter(item => item.imgUrl = `${environment.fileUrl}` + item.imgUrl);
          console.log(this.items);
        } else {
          this.notificationService.error(`Couldn't list items`, result.statusText);
        }
      }
    });
  }

  uploadImage(_id: number) {
    const initialState = {
      itemId: _id
    };
    this.modalservice.show(UploadItemImageComponent, {initialState});
    this.modalservice.onHide.subscribe(value => {
      this.listItems();
    });
  }
}
