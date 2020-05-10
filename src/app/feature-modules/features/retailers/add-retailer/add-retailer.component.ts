import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../../items/item.service';
import {RetailerService} from '../retailer.service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {RetailerRegisterModel} from '../retailer.model';
import {NotificationService} from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.scss']
})
export class AddRetailerComponent implements OnInit {
  addRetailerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private retailerService: RetailerService,
    public  bsModalRef: BsModalRef,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.addRetailerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      locationType: ['', Validators.required],
      tags: ['', Validators.required],
      openingHr: ['', [Validators.required, Validators.min(0), Validators.max(23)]],
      openingMin: ['', [Validators.required, Validators.min(0), Validators.max(59)]],
      closingHr: ['', [Validators.required, Validators.min(0), Validators.max(23)]],
      closingMin: ['', [Validators.required, Validators.min(0), Validators.max(59)]],
      imgUrl: ''
    });
  }

  get f() {
    return this.addRetailerForm.controls;
  }

  addRetailer() {
    this.submitted = true;
    if (this.addRetailerForm.valid) {
      this.retailerService.addRetailer(this.addRetailerForm.value).subscribe(resp => {
        if (resp) {
          // change this when response body is fixed
          if (resp.status === 200) {
            this.notificationService.success('Retailer registered', 'Successful');
            this.bsModalRef.hide();
          } else {
            this.bsModalRef.hide();
            this.notificationService.error(`Couldn't register retailer`, resp.statusText);
          }
        }
      });
    }

  }
}
