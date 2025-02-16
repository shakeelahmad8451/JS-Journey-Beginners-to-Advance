function popUpBlock(){
    // on click of this button we need to show the popup menu and override the display:none to display:flex;
    const popUpDiv = document.getElementById('popaddnewtask');
    console.log(popUpDiv)
    console.log(popUpDiv.classList)
    popUpDiv.classList.add('display');

    // and also blur the screen we need to access the overlay div and give it display of block
    const overlay = document.getElementById('overlay');
    console.log(overlay.classList);
    overlay.classList.add('overlay-visible')


}

function handleChange(event){
    console.log(event.target.value);
    // access the input and set the value to the event.target.value
    const inputTag = document.getElementById('taskText');
    inputTag.value=event.target.value;

}

function addTask(){
    const inputTag = document.getElementById('taskText');

        // if there is not text then show alert
        if(inputTag.value === ''){
            alert('Task cannot be empty !!!!');
            return;
        }

    // when user clicks add task we need to append the task in the task container and give it a class of task
        const taskContainer = document.getElementById('taskcontainer');
        
        const div = document.createElement('div');
        const p =  document.createElement('p');
        const input = document.createElement('input');
        const i = document.createElement('i');

        // Now we need to get the text what the user have enetered in the input field
        // and put it inside the input tag
        input.value=inputTag.value;
        console.log(input.innerText)
        // and set the input value to null or empty string
        inputTag.value='';

        console.log(input); // at this point we have p tag

        i.innerText='X';
        p.innerText='7:00 PM'

        // now we need to put all these p,input and i in the div
        div.appendChild(p);
        div.appendChild(input);
        div.appendChild(i);

        // now add classes accordingly to div and other
        div.classList.add('task');
        p.classList.add('time');
        input.readOnly= true;

       // now put this div we have made till now into the taskcontainer
       taskContainer.appendChild(div); 

       //now after adding the task we need to close the popup and remove the overlay class from the div

       const overlay = document.getElementById('overlay');
       overlay.classList.remove('overlay-visible');

       // and close the popup menu
       const popUpDiv = document.getElementById('popaddnewtask');
       popUpDiv.classList.remove('display');

    
       // remove the task 
       i.addEventListener('click',()=>{
        taskContainer.removeChild(div);
        console.log('child removed')
       })

       // Toggle bw state of task if already completed then remove else addd
       input.addEventListener('click',()=>{
        if(input.classList[0]==='completed'){
            input.classList.remove('completed');
            return
        }
        input.classList.add('completed');
        
       })



}