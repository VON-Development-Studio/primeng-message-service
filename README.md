# PrimeNG Message Service

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Installing

1. Add NPM package into your project:

```node
npm i @von-development-studio/primeng-message-service -S
```

2. Add _**VonMessageService**_ into `providers` section

```typescript
import { MessageService } from 'primeng/api';
import { VonMessageService } from '@von-development-studio/primeng-message-service';

...

@NgModule({
  providers: [
    ...
    MessageService,
    VonMessageService,
    ...
  ]
})
export class AppModule { }
```

## Usage

Add service _**VonMessageService**_ in your constructor and use it:

```typescript
import { Component } from "@angular/core";
import { VonMessageService } from "@von-development-studio/primeng-message-service";

@Component({
  selector: "lib-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(protected messageService: VonMessageService) {}

  addSuccess = () => this.messageService.addSuccess("Success Message");
  addInfo = () => this.messageService.addInfo("Info Message");
  addWarning = () => this.messageService.addWarning("Warning Message");
  addError = () => this.messageService.addError("Error Message");
}
```

<hr>

###### _[By Von Development Studio](https://www.von-development-studio.com/)_
