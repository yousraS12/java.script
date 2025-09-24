let C12=["C1","C3","C2","C1","C8","C1","C5","C6","C1","C2","C5"];
let C={};
for(let i=0;i<C12.length;i++){
    let A=C12[i]
    if(C[A]){
        C[A]++

    }else{
        C[A]=1
    }
}
console.log(C);




  
  