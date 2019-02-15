import { Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'img[imgPreview]' })

export class ImagePreviewDirective {

    @Input() image: any;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    ngOnChanges(changes: SimpleChanges) {
        let el = this.el;
        let reader = new FileReader();

        if (typeof this.image === 'string'){
            el.nativeElement.src = this.image;
            return;
        }      

        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };

        if (this.image) {
            return reader.readAsDataURL(this.image);
        }

    }

}