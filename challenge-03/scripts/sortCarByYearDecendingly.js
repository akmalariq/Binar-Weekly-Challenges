function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  // const result = [...cars];

  // Tulis code-mu disini
  let result = [], num = null
  result.push(cars.pop())
  while(cars.length>0){
    num = cars.pop()
    if(result[0].year<num.year){
        result.splice(0,0,num)
    }else if(result[result.length-1].year>num.year){
        result.push(num)
    }else{
      for(let i=0;i<result.length;i++){
        if(result[i].year<num.year){
          result.splice(i,0,num)
          break
        }
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
