
//a.Print odd numbers in array
(function(arr){
    console.log("''Programs in IIFE functions''")
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            
            console.log(arr[i])
        }
    }
})
([1,2,3,4,5,6]);

//b.Title caps in string

(function (){
    let arr=["iphone", "samsung","google pixel"];
  for(i=0;i<arr.length;i++){
      arr[i]=arr[i].toLowerCase().split(' ');;
      for(j=0;j<arr[i].length;j++){
          arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
      }
      let result=arr[i].join(" ");
      console.log(result);
      }  
  })();

//sum of array
(function(arr){
    var total=0;
    for(let i=0; i<arr.length; i++){
        total = total+arr[i]
    }
    console.log(total)
})
([1,2,3]);


//d.Prime numbers in array
(function ()
{
   
   var prime=[58,6,8,23,5];
   for(i=0;i<prime.length;i++)
   {
    var k=0;
      if(prime[i]==1 || prime[i]<=0)
       {
        continue
       }
      else 
       {
         for(j=1;j<=prime[i];j++)
          {
            if(prime[i]%j===0)
            {
               k=k+1;
            }
          }
          if(k==2)
          {
             console.log(prime[i]);
          }
          }
    }
}
)();

//e.palindromes in array

(function ()
{
   let num=["Robert","hello","appa","anna"];
   for(i=0;i<num.length;i++)
   {
       let pali=num[i].toString();   
       let n=pali.split("").reverse().join("");
        if(n==num[i])
            {
               console.log(num[i]);
            }
          
    }
})();


//f.Return median of two sorted arrays of the same size

(function ()
{
  var ar1 = [2,9,9,9,9];
  var ar2 = [1,8,5,0,0];
  var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log((ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

  var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
   
 
    for (count = 0; count <= n1; count++)
    {
        if (i == n1)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n1)
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
    
   
})();


//g.remove Duplicates in array

(function ()
{
  var arr = [1, 2, 2, 3, 4, 4, 4, 5,5];
    var n = arr.length;
    if (n==0 || n==1)
        return n;    
   for (var i=0; i<n; i++)
    var temp = new Array(n);
    var j = 0;
    for (var i=0; i<n-1; i++)
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
    temp[j++] = arr[n-1];

    for (var i=0; i<j; i++)
        arr[i] = temp[i];
        
       for(i=0;i<j;i++)
       console.log(arr[i])
})();

//h.Rotate array k times

(function (){   
    var arr= [1, 2, 3, 4, 5];
    var n = arr.length;
    var k= 3;
   
  
      
      for (var i = 0; i < n; i++) {
          if (i < k) {
              console.log(arr[n + i - k] + " ");
          }
          else {
              console.log((arr[i - k]) + " ");
          }
      }
  }
  
  )();
  






  




  
    
    
    

