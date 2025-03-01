function taskCompleted(disablebtn) {
  alert("Board Update Successfully");

  taskAssigned = parseInt(document.getElementById("taskAssigned").innerText);
  newAssignedTask = taskAssigned - 1;

  if (newAssignedTask == 0) {
    alert("All tasks completed!");
  }

  document.getElementById("taskAssigned").innerText = newAssignedTask;

  taskCompletedn = parseInt(document.getElementById("taskCompleted").innerText);
  newCompletedTask = taskCompletedn + 1;
  document.getElementById("taskCompleted").innerText = newCompletedTask;

  disablebtn.disabled = true;
  disablebtn.style.backgroundColor = "gray";

  const currentTime = new Date();
  const time = currentTime.toLocaleTimeString();

  const newP = document.createElement("p");
  newP.innerText = `Task completed at ${time}`;
  newP.classList.add("grayish-color", "text-base", "my-4", "p-2", "rounded");
  document.getElementById("allHistory").appendChild(newP);
}

document.getElementById("clearHistory").addEventListener("click", function () {
  const allHistory = document.getElementById("allHistory");
  allHistory.innerHTML = "";
});
