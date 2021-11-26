
const dataSet1=[4,7,5,3,2,9,8];


const assendingOrderForDataSet1=(array)=>{
let dataSet=[...array];
let length=array.length;
   for(i=0;i<length;i++){
    forLoopY(dataSet,length,i)
   }
   return dataSet;
}

const forLoopY=(dataset,length,i)=>{
    var dataSet=[...dataset];
    var result=dataset;
for(y=i+1;y<length;y++){
    if(result[i]>result[y]){
     result[i]=dataSet[y];
     result[y]=dataSet[i];
     dataSet=[...result];
    }
}
}
const MinMaxAvgForDataSet1=()=>{
    let array=assendingOrderForDataSet1(dataSet1);
    let min=array[0];
    let max=array[array.length-1];
    let average=array.reduce((a,b)=>a+b,0);
    average=average/(array.length);
    return {min,max,average}
}

console.log("question 1",assendingOrderForDataSet1(dataSet1));
console.log("quesion 5",MinMaxAvgForDataSet1());
