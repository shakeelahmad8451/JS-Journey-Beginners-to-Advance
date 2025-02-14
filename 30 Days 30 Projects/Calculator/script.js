/* function handleClick(e){


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
 */

// The above code has a lot of redundancy and not easy to understand so here is the updated version of the function
// Now this code is much cleaner and easy to read
function handleClick(e){

    const display =  document.getElementById('display');
    const clickedButtonValue = e.target.value;

   // if(e.target.value === 'AC'){
    if(clickedButtonValue === 'AC'){
        //document.getElementById('display').value="";
        display.value='';
    }
    else if(clickedButtonValue === 'DE'){
        display.value = display.value.slice(0,-1)
    }
    else if(clickedButtonValue === '='){
        let equation = display.value;
        display.value = '';
        let results;
        try{
            results = eval(equation);
        }catch(error){
            alert('Invalid Expression !!!');
            display.value = ''
            return;
        }
        console.log(results);
        display.value = results;
    }
    else{
        console.log(e.target.value);
        display.value+=clickedButtonValue;
    }
}

