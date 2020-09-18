const task3Element = document.getElementById('task-3');

function func1(){
    alert('Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
}

function func2(name){
    alert(`Hi ${name}`);
}

function func3(name1,name2,name3){
    const result=`${name1} ${name2} ${name3}`;
    return result;
}

func2('Gouravi');
task3Element.addEventListener('click',func1);
const result=func3('Gouravi','Rajesh','Dorkhande');
alert(result);
