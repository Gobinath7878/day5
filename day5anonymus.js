console.log("''Programs in anonymus functions''")

//a.Print odd numbers in an array using Anonymus function
var array =[1,2,31,4,5,6,27,8,9]
var odd = function(array){
    var result = array.filter(element=>element%2!=0)
    return result;
}
console.log(odd(array))

//b.Title caps in a string array
let titleCase= function (){
    let arr=["cricket is an emotional", "mother is my soul"];
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].toLowerCase().split(' ');;
        for(j=0;j<arr[i].length;j++){
            arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
        }
        let result=arr[i].join(" ");
        console.log(result);          
    }
}
titleCase();

//c.Sum of all numbers in array
var array =[1,2,3,70,5,5,7,8,9]
var odd = function(array){
    var result1 = array.reduce((acc,cv)=>acc+cv)
   console.log(result1)
}
odd(array);


//d.Prime numbers in array
var array = [6,4,9,17,19,12]; 

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); 


//e.pallindrome in array
var str=['amma','appa',121,789,'life'];
function palindrome(str) {

  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }

  return true;
}
console.log(str.filter(palindrome));

//f.Return median of two sorted arrays of the same size
function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
 
var ar1 = [1, 1, 1, 2, 1];
var ar2 = [9, 1, 2, 0, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");


//g.remove Duplicates in array
function removeDuplicates(arr, n)
{
    if (n==0 || n==1)
        return n;
 
    var temp = new Array(n);
    var j = 0;
    for (var i=0; i<n-1; i++)
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
    temp[j++] = arr[n-1];

    for (var i=0; i<j; i++)
        arr[i] = temp[i];
    return j;
}
    var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    var n = arr.length;
    n = removeDuplicates(arr, n);
      for (var i=0; i<n; i++)
       console.log((arr[i]));

//h.Rotate an array by k times

function RightRotate(a, n, k)
{
    k = k % n;
    for (var i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
}
var arr= [1, 2, 3, 4, 5];
var N = arr.length;
var K = 2;
 
RightRotate(arr, N, K);


 
 
