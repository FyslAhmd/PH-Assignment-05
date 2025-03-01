function taskCompleted(disablebtn) {
  alert("Board Update Successfully");

  taskAssigned = parseInt(document.getElementById("taskAssigned").innerText);
  newAssignedTask = taskAssigned - 1;

  if (newAssignedTask == 0) {
    alert("Congrates!!! You have completed all the current task");
  }

  document.getElementById("taskAssigned").innerText = newAssignedTask;

  taskCompletedn = parseInt(document.getElementById("taskCompleted").innerText);
  newCompletedTask = taskCompletedn + 1;
  document.getElementById("taskCompleted").innerText = newCompletedTask;

  disablebtn.disabled = true;
  disablebtn.style.backgroundColor = "gray";

  const currentTime = new Date();
  const time = currentTime.toLocaleTimeString();

  const parentDiv = disablebtn.parentNode.parentNode;
  const title = parentDiv.querySelector("h1").innerText;
  const newP = document.createElement("p");
  newP.innerText = `You have completed the task ${title} at ${time}`;
  newP.classList.add("grayish-color", "text-base", "my-4", "p-2", "rounded");
  document.getElementById("allHistory").appendChild(newP);
}

document.getElementById("clearHistory").addEventListener("click", function () {
  const allHistory = document.getElementById("allHistory");
  allHistory.innerHTML = "";
});


document.getElementById('discover-blog').addEventListener('click', function () {
  window.location.href = 'blogs.html';
});


document.getElementById('change-color').addEventListener('click', function () {
  const color1 = Math.random() * 255;
  const color2 = Math.random() * 255;
  const color3 = Math.random() * 255;
  document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
});


window.onload = function updateTheDate() {
  const currentTime = new Date();
  const week = currentTime.toLocaleString('en-us',{weekday:'short'});
  const date = currentTime.getDate();
  const month = currentTime.toLocaleString('en-us',{month:'short'});
  const year = currentTime.getFullYear();
  console.log(week, date, month, year);
  document.getElementById('putWeek').innerText = week;
  document.getElementById('putDate').innerText = `${date} ${month} ${year}`;

}