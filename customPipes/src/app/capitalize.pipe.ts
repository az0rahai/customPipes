/**
 * Created by v711267 on 7/18/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class capitalizePipe implements PipeTransform{

    transform(value: string, args?: any){
     /* Check for empty strings*/
        if(!value)
          return null;

        else{
         let corrected = this.titleCase(value);
         return(corrected);
        }

    }

    titleCase(str : string){
      var words = str.split(" ");

      enum  preposition {The, Of, In, For, From};

      for(let i=0;i<words.length; i++){
        if(words[i]==" ")continue;

        var copy = words[i].substring(1).toLowerCase();
        words[i] = words[i][0].toUpperCase() + copy;

       /* Make first letter of preposition to lower case if not first word*/
        if(words[i] in preposition && i>0){
          words[i] = words[i][0].toLowerCase() + copy;
          
        }
      }
      console.log(words.join(" "));
      /*words = words.join(" ");*/
      return (words.join(" "));
    }
}
