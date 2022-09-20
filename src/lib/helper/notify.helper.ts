import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotifyHelper {
  constructor(private toastr: ToastrService) {}

  success(description: string, title: string = '') {
    if (!title) {
      title = 'Success';
    }

    this.toastr.success(description, title, {
      enableHtml: true,
    });
  }

  error(description: string) {
    let errorMsg = 'Error';

    this.toastr.error(description, errorMsg);
  }
}
