function handleClick(e){


    if(e.target.value === 'AC'){
        document.getElementById('display').value="";
    }
    else if(e.target.value === 'DE'){
        document.getElementById('display').value = document.getElementById('display').value.slice(0,-1)
    }
    else if(e.target.value === '='){
        let equation = document.getElementById('display').value;
        document.getElementById('display').value = '';
        let results;
        try{
            results = eval(equation);
        }catch(error){
            alert('Invalid Expression !!!');
            document.getElementById('display').value = ''
            return;
        }
        console.log(results);
        document.getElementById('display').value = results;
    }
    else{
        console.log(e.target.value);
        document.getElementById('display').value+=e.target.value;
    }
}