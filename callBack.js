function callBack(name ,age , task){
    console.log('hello i am' , name );
    console.log('I am a student');
    console.log('I am ' , age , 'years old');
    task();//callBack function
}

function school(){
    console.log("I read in class 10");
}
function university(){
    console.log('I read in class 14');
}


callBack('Rahat' , 15 , university);

console.log("\n");

callBack('Shaum',12 , school);
