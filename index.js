const form = document.querySelector('form');
const name = document.querySelector('#name');
const hour = document.querySelector('#hour');
const error = document.querySelector('#error');

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    if(name.value && hour.value){
        const task = {
            name:name.value,
            hour:parseInt(hour.value)
        };
        db.collection('consumption').add(task).then(res=>{
            error.textContent="";
            name.value = "";
            hour.value ="";
        })
    }else{
        error.textContent = "Please enter value before submitting."
    }
})