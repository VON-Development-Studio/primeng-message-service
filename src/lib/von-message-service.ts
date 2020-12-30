import { Injectable } from '@angular/core';
import { MessageService as PrimeNgMessage } from 'primeng/api';

@Injectable()
export class VonMessageService {

  constructor(private message: PrimeNgMessage) { }

  addSuccess = (message: string) => this.add('success', message);

  addInfo = (message: string) => this.add('info', message);

  addWarning = (message: string) => this.add('warn', message);

  addError = (message: string) => this.add('error', message);

  private add = (severity: string, message: string) =>
    this.message.add({ severity, detail: message })
}
