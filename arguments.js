function addNumber(num1 , num2){
    console.log(arguments);
    var sum = 0;
    for(i = 0 ; i<arguments.length; i++){
    let num = arguments[i];
    sum = num + sum;
    }
    console.log(sum);
    

}

addNumber(15,20,15,12,17,14);
