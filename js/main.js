let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks');
let invalidData = document.getElementById('invalidData');
let closeInvalidMessage = document.querySelector('#invalidData .close');
let model = document.getElementById('model');
let btnModel = document.getElementById('btnModel');

let showModel = () =>{
    model.classList.toggle('block');

}
btnModel.addEventListener('click' , showModel)

let noTasksFunc = () =>{
    if(allTasks.childElementCount == 0){
        noTasks.classList.remove('none');
    }
}


let closeInvalidMessageFunction = ()=>{
    invalidData.classList.add('none');
}

 let addTask = () =>{
    
    let taskData = taskInput.value;
    if(taskInput.value == "" || taskInput.value.length < 3 || taskInput.value.length >20 ){
        invalidData.classList.remove('none');
    }else{
      noTasks.classList.add('none');
      allTasks.innerHTML += `<div class="alert alert-info"> 
      ${taskData}
      <i class="fas delete fa-trash float-right" style="font-size: 20px;"></i>
      </div>`;
      taskInput.value = "";   //to make input place empty after i put my input
      allTasks.addEventListener('click' , function(e){
       
         
      })
      showModel();  //to close model after put input
    }

    //let newDiv = document.createElement('div');
    //newDiv.classList = "alert alert-info";
    //newDiv.append(taskData);
    //let deleteBtn = document.createElement('button');
    //deleteBtn.classList = "btn btn-danger";
    //deleteBtn.innerText = "Delete";
    //newDiv.append(deleteBtn);
    //allTasks.append(newDiv);


 }

 addBtn.addEventListener('click' , addTask);
 closeInvalidMessage.addEventListener('click' , closeInvalidMessageFunction );
 document.addEventListener('click' , function(e){
     if(e.target.classList.contains('delete')){
         e.target.parentElement.remove();
         noTasksFunc();
     }
 })