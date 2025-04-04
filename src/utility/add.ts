
// function for addition of number by finding in string and seprated by delimiter
export const add = (numbers: string): number => {
  //check if string lenth is 0 
  if (!numbers) return 0;  
  
  // add default delimter regex
  const delimiter = /,|\n/;
  const numArray = numbers.split(delimiter).map((item)=>Number(item))

  return numArray.reduce((sum,num)=>sum+num,0)
}