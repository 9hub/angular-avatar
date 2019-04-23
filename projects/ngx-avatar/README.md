# Angular Avatar

Angular library to get and edit user avatars.

### Prerequisites

To use this library you need to have installed **angular-material** and **flex-layout**.

Using NPM:

```batch
npm i @angular/material @angular/cdk
npm i @angular/flex-layout 
```

Using Yarn:

```batch
yarn add @angular/material @angular/cdk
yarn add @angular/flex-layout 
```
If you have **angular-cli** installed, you can install **angular-material** as below:

```batch
ng add @angular/material
```
If you have any issue with **angular-material** installation, please refer to [getting-started](https://material.angular.io/guide/getting-started).

### Installing

Using NPM:

```batch
npm i @9hub/ngx-avatar
```

Using Yarn:

```batch
yarn add @9hub/ngx-avatar
```

### Usage

You need import our module and add to your Angular's main module.

```typescript
import { NgxAvatarModule } from '@9hub/ngx-avatar'

@NgModule({
  imports: [
    ...
    NgxAvatarModule
    ...
  ]
})
```

Using our component on you Angular template:

```html
<ngx-avatar [avatarSrc]="myAvatar"></ngx-avatar>
```

## Built With

* [Angular](https://angular.io/docs) - The web framework used
* [Angular Material](https://material.angular.io) - Material design components
* [Flex Layout](https://github.com/angular/flex-layout) - Angular layout API
* [CropperJs](https://github.com/fengyuanchen/cropperjs) - Javascript image cropper
* [Ngx Webcam](https://www.npmjs.com/package/ngx-webcam) - Angular webcam component

## Contributors
<a href="CONTRIBUTORS.md">
  <img class="avatar" alt="Erik Romero" width="100" height="100" src="https://avatars0.githubusercontent.com/u/12468239">

  <img class="avatar" alt="Edwin Encinas" width="100" height="100" src="https://avatars0.githubusercontent.com/u/6945588">
</a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
