function taskCompleted(disablebtn) {
  alert("Task completed!");

  taskAssigned = parseInt(document.getElementById("taskAssigned").innerText);
  newAssignedTask = taskAssigned - 1;

  if(newAssignedTask == 0){
    alert("All tasks completed!");
  }

  document.getElementById("taskAssigned").innerText = newAssignedTask;

  taskCompletedn = parseInt(document.getElementById("taskCompleted").innerText);
  newCompletedTask = taskCompletedn + 1;
  document.getElementById("taskCompleted").innerText = newCompletedTask;

  disablebtn.disabled = true;
  disablebtn.style.backgroundColor = "gray";
}
