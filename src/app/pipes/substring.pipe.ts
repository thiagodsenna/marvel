import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  //Transforma a função substring() em pipe
  transform(value: string, startIndex?: number, endIndex?: number): string {
    
    //Adiciona '...' ao final da string caso ela tenha sido cortada
    const sufix: string = (value.length > ((endIndex) ? endIndex: 150 )) ? '...' : '';
    
    //Valida parâmetros e retorna valor
    if (!startIndex && startIndex != 0) {
      return value.substring(0, 150) + sufix;
    }
    if (!endIndex && endIndex != 0) {
      return value.substring(startIndex);
    }
    return value.substring(startIndex, endIndex) + sufix;
  }

}
