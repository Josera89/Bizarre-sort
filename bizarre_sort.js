function bizarreSort (array) {
  for (i = 0; i < array.length; i++) {
    let n = array[i]
    setTimeout(function(){
      console.log(n);
    }, n * 100)
  }
}

bizarreSort([77, 1, 60, 33, 76, 600, 0, 5])
