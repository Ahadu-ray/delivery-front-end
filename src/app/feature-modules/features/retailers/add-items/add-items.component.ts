import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RetailerService} from '../retailer.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ItemService} from '../../items/item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  addItemForm: FormGroup;
  retailerId: number;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private notificationService: NotificationService,
    public bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get f() {
    return this.addItemForm.controls;
  }

  addItem() {
    this.submitted = true;

    if (this.addItemForm.valid) {
      this.itemService.addRetailerItem(this.retailerId, this.addItemForm.value).subscribe(resp => {
        if (resp) {
          // change this when response body is fixed
          if (resp.status === 200) {
            this.notificationService.success('Retailer item registered', 'Successful');
            this.bsModalRef.hide();
          } else {
            this.bsModalRef.hide();
            this.notificationService.error(`Couldn't register retailer item`, resp.statusText);
          }
        }
      });
    }
  }
}
