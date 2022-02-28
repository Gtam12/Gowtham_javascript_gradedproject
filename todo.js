const todoListSection = document.querySelector('.tasks');
const addTaskButton = document.querySelector('#add');
const taksInput = document.querySelector('.add-task');
const taskSection  = document.querySelector('.tasks');

const taskList = [];

const listTasks = (tasks) => {
   
    tasks.forEach((task) => {
        const taskHtmlElementSection = `
    <input type="text" id="taskname" value =${task} disabled/>
    <button id=edit}>Edit</button>
    <button id="delete">Delete</button>`
     taskSection.innerHTML = taskHtmlElementSection
    })
}



addTaskButton.addEventListener('click', (e)=>{
    try {   
        if (taksInput.value !== '') {
           // taskSection.innerHTML = '';
            taskList.push(taksInput.value);
        }
        else
            throw new Error('Enter Task before adding')
        taskList&&  listTasks(taskList);    
    }
    catch (e) {
        alert(e)
    }  
})

taskSection.hasChildNodes() && deleteItems();


function deleteItems(){
    let deletButton = document.querySelector('#delete');
    let taksName = document.getElementById('taskname').value;
    
    deletButton.addEventListener('click', (e)=>{
        if(taskList.length>0){
            let index = taskList.indexOf(taksName);
            taskList.splice(index,1);
            listTasks(taskList);
        }

    })

}






// todoSection.addEventListener('change', (e) => {
//     console.log(e.target + 'ID')
    
//     if (e.target.matches('#edit')) {
//         e.target.addEventListener('click', () => {
//             document.querySelector('#taskname').removeAttribute('disabled')
//         })
//     }

//     else if (e.target.matches('#save')) {
//         e.target.addEventListener('click', () => {
//             takslist.push(document.getElementById('taskname').value)
//         })
//     }

    


    
// })










