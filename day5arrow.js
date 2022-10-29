console.log("''Programs in arrow functions''")

//a.Print odd numbers in array
var oddArrow = (array)=> {
    for(var i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
oddArrow([10,20,30,47,54,61,78,81,90])

//b.Title caps in string

var capt= (arr)=> {
   var arr=["buy one get one", "here, mobile network is good!"];
   for(i=0;i<arr.length;i++){
       arr[i]=arr[i].toLowerCase().split(' ');;
       for(j=0;j<arr[i].length;j++){
           arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
       }
       let result=arr[i].join(" ");
       console.log(result);          
   }
}
capt();        


//c.sum of array
var sumOf=(arr)=>{
  var total=0;
  for(var key in arr){
      total = total+arr[key]
  }
  console.log(total)
}
sumOf([1,2,3,4]);


//d.Prime numbers in array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i=2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray)


//e.pallindrome in array
var arr = ['robert', 27, 12321, 'did', 'amma']
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));



