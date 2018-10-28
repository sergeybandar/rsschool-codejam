function sumOfOther(arr=[]){
  var sum=0;
  var mas=[];
  for(var i=0; i<arr.length;i++){
sum+=arr[i];
  }
  for(var i=0;i<arr.length;i++){
    mas[i]=sum-arr[i];
  }
  return mas;
}