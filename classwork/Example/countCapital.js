let countCapitals = 
str
 => {
   let count = 0;
   for (let i = 0; i < str.length; i++) {
      let ch = str.charAt(i);
      if (ch >= 'A' && ch <= 'Z') {
         count++;
      }
   }        
   return count;
}