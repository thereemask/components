# Aud

Angular Useful Directives

### Getting Started

###### Install

`npm i @reemask/aud`

###### Usage

### Prevent Input

This directive prevents specific input in any input or contenteditable element

###### Import into module

```typescript
import {PreventInputModule} from '@reemask/aud/prevent-input';

@NgModule({
  imports: [PreventInputModule]
})
export class MyModule {}
```

###### Use

```html
<!--Allow only text-->
<input type="text" [audPreventInput]="'text'">

<!--Allow only numbers-->
<input type="text" [audPreventInput]="'number'">
```

### Prevent Multiple Clicks

This directive prevents multiple clicks on any element

###### Import into module

```typescript
import {PreventMultipleClicksModule} from '@reemask/aud/prevent-multiple-clicks';

@NgModule({
  imports: [PreventMultipleClicksModule]
})
export class MyModule {}
```

###### Use

```html
<!-- Prevent multiple clicks  -->
<button (audPreventMultipleClicks)="clickMe($event)">Click Me!!</button>
```
