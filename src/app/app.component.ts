import { Component, ViewChild, ElementRef } from '@angular/core';
import { IMAGENET_CLASSES } from './mobilenet_class';

declare var tf, model;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Huang Liang's Site`;
  url = "";
  image;
  list;
  @ViewChild("image") private imageRef: ElementRef<HTMLElement>;
  ngOnInit() {
    this.image = this.imageRef.nativeElement;
  }
  onFileChanged(event, image) {
    const file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    let component = this;
    reader.onload = function () {
      component.url = reader.result;
    };
  }
  onPredict() {
    let offset = tf.scalar(127.5);
    let tensor = tf.fromPixels(this.image).resizeNearestNeighbor([224, 224]).toFloat().sub(offset).div(offset).expandDims();
    let component = this;
    (async () => {
      let prediction = await model.predict(tensor).data();
      let top5 = Array.from(prediction).map((p: number, i) => {
        return { probability: p, className: IMAGENET_CLASSES[i] };
      })
        .sort((a, b)=> { return b.probability - a.probability; })
        .slice(0, 5);
      component.list = top5;
    })();
  }
}
