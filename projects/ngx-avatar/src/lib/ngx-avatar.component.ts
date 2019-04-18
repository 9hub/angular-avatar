import { Component, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ImageEditorComponent } from './image-editor/image-editor.component';

@Component({
  selector: 'ngx-avatar',
  templateUrl: './ngx-avatar.component.html',
  styleUrls: ['./ngx-avatar.component.css']
})
export class NgxAvatartComponent implements OnDestroy {
  @Input()
  public avatarSrc: string;

  private editedImage: HTMLCanvasElement;
  private unsubscribe = new Subject<void>();

  constructor(public dialog: MatDialog) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageEditorComponent, {
      height: '31.250em',
      width: '43.750em',
      disableClose: true,
      data: { imgSrc: this.avatarSrc }
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        if (result) {
          this.editedImage = result;
          this.avatarSrc = this.editedImage.toDataURL();
        }
      });
  }

}
