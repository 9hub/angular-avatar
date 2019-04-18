import { Component, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject, Observable } from 'rxjs';

import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import Cropper from 'cropperjs';

@Component({
  selector: 'ngx-avatar-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements AfterViewInit {
  private image: HTMLImageElement;
  private cropper: Cropper;
  public imageToEdit = 'assets/images/default-user-image.svg';
  // Webcam configurations
  public webCamDisabled = true;
  public allowCameraSwitch = false;
  public trigger: Subject<void> = new Subject<void>();
  public errors: WebcamInitError[] = [];

  constructor(
    public dialogRef: MatDialogRef<ImageEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.imageToEdit = data.imgSrc;
  }

  ngAfterViewInit() {
    this.image = document.getElementById('image-to-edit') as HTMLImageElement;
    this.cropper = new Cropper(this.image, {
      aspectRatio: 1 / 1,
      dragMode: 'move' as Cropper.DragMode,
      preview: document.getElementById('image-edited-preview')
    });
  }

  // START --Editor's methods-- //
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image.src = URL.createObjectURL(file);
      this.cropper.destroy();
      this.cropper = new Cropper(this.image, {
        aspectRatio: 1 / 1,
        dragMode: 'move' as Cropper.DragMode,
        preview: document.getElementById('image-edited-preview')
      });
    }
  }

  enableWebcam(): void {
    this.webCamDisabled = false;
  }

  resetEditor(): void {
    this.cropper.reset();
  }

  closeEditor() {
    this.cropper.destroy();
    this.dialogRef.close();
  }

  saveEditedImage() {
    const canvas =  this.cropper.getCroppedCanvas();
    this.cropper.destroy();
    this.dialogRef.close(canvas);
  }
  // END --Editor's methods-- //

  // START --Webcam's methods-- //
  disableWebcam(): void {
    this.webCamDisabled = true;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.cropper.replace(webcamImage.imageAsDataUrl);
    this.webCamDisabled = true;
  }
  // END --Webcam's methods-- //
}
