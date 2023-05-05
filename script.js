window.addEventListener('load',()=>{
const form=document.querySelector("#new-task-from");
const input=document.querySelector("#new-task-input");
const list_ul=document.querySelector("#tasks");

form.addEventListener('submit',(e)=>{
e.preventDefault();

    const a=input.value; 
    if(!a){
        alert("Please fill the task first");
            return;
    }
    const task_el=document.createElement("div");
    task_el.classList.add("task");

    const task_content_el=document.createElement("div");
    task_content_el.classList.add("content");
    

        task_el.appendChild(task_content_el);
        const task_input_el=document.createElement("input");
        task_input_el.classList.add("text")
        task_input_el.type="text";
        task_input_el.value=a;
        task_content_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);

        const task_actions=document.createElement("div");
        task_actions.classList.add("actions");
        

        const task_edit=document.createElement("button");
        task_edit.classList.add("Edit");
        task_edit.innerHTML="Edit";

        const task_delete=document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML="Delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);

        task_el.appendChild(task_actions);
        list_ul.appendChild(task_el);
   
        input.value="";

    task_edit.addEventListener('click',()=>{
        if(task_edit.innerText.toLocaleLowerCase()=="edit")
        {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit.innerText="Save";
        }
        else 
        {
            task_input_el.setAttribute("readonly", "true");
            task_edit.innerHTML="Edit";
        }
        task_delete.addEventListener('click',()=>{
            list_ul.removechild(task_el);
        });
    });
});

});