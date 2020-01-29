import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public toaster: ToastrService) {
  }

  error(message) {
    this.toaster.error(message, 'Error');
  }

  warning(message) {
    this.toaster.warning(message, 'Warning');
  }

  success(message) {
    this.toaster.success(message, 'Success');
  }
}
