let tasks=[
    {name:"Review Week 1 Work",completed:true,id:"a"},
    {name:"Learn New Tools/Concepts",completed:false,id:"b"},
    {name:"Complete Readings/Resources",completed:"false",id:"c"},
    {name:"Main Project Progress",completed:"in progress",id:"d"},
    {name:"Team Collaboration",completed:true,id:"e"},
    {name:"Mid-Week Check",completed:"in progress",id:"f"},
    {name:"Submit Deliverables",completed:"true",id:"g"}
];
console.log(tasks)

function showTaskStatus(tasks){
    tasks.forEach(task => {
      
        if(task.completed===true){
           console.log("Your task has been completed.");
        } else if (task.completed ===false){
            console.log("your task has not been completed.");
        } else if (task.completed==="in progress" ){
           console.log("Your task is currently in progress.");
        } else {
           console.log("unknown status");
        }

    });
    
}

 console.log(showTaskStatus(tasks));

