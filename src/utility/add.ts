
// function for addition of number by finding in string and seprated by delimiter
export const add = (numbers: string): number => {
  //check if string lenth is 0 
  if (!numbers) return 0; 
  numbers = numbers.replace(/\\n/g,'\n');
  // add default delimter regex
  let delimiter = /,|\n/;
  
  //check if string come with custom delimiters
  if(numbers.startsWith("//")){
    // find delimiter betwwen // and \n , it can be  multiple character
    const matchDelimiter = numbers.match(/^\/\/(.+)\n/); 
    if (matchDelimiter) {
        //get first captured group or it can be single character
        //remove special character in delimiter before using regex, as it can break regex
        const escapedDelimiter = matchDelimiter[1].replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter, "g");

         numbers = numbers.substring(matchDelimiter[0].length)
         numbers = numbers.replace(/\n/g,matchDelimiter[1])
   }
  }



  const numArray = numbers.split(delimiter).map((item)=>Number(item))


// check for negative number
const negativeNumbers = numArray.filter((num)=>num <0);
if (negativeNumbers.length > 0 ){
    throw new Error (`negative numbers not allowed: ${negativeNumbers.join(", ")}`)
}
  return numArray.reduce((sum,num)=>sum+num,0)
}