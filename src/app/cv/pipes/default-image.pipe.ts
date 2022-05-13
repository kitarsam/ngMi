import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from '../../config/constantes';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (!path.trim().length) {
      return CONSTANTES.defaultImage;
    }
    return path;
  }
}
