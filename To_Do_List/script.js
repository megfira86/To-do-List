alert("Asalamualeykum Werahmetullahi Webarakatuh");

prompt("Enter your name","Full name")

let tasksDescriptions ={
    "Review Week 1 Work":"Revisit last week's deliverables, fix mistakes, and note lessons learned.",
    
    "Learn New Tools/Concepts":"Explore the tools introducbred this week. Skim docs and record key commands.",
    
    "Complete Readings/Resources":"Finish assigned articles/videos and summarize the main points in a few bullets.",

    "Main Project Progress":"Break the Week 2 assignment into small steps and complete the next milestone.",

    "Team Collaboration":"Share updates with your group, ask for help if blocked, and review a teammate's work",

    "Mid-Week Check":"Compare progress to your plan and adjust the remaining tasks if needed",

    "Submit Deliverables":"Package your work, double-check requirements, and submit before the deadline.",
};

function createTask(id,name,description,completed)
{
    return {
    id:id,
    name:name,
    description:description,
    completed:completed,
    };
};

let task1 = createTask(a,"Review Week 1 Work","Revisit last week's deliverables, fix mistakes, and note lessons learned.",true);
console.log(task1);

