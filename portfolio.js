let toggle = document.getElementById('projects');
let firstProject = document.getElementById('first-project');
let secondProject = document.getElementById('second-project');
let thirdProject = document.getElementById('third-project');

function showItem () = {
    firstProject.style.display = 'block';
};

toggle.addEventListener('mousedown',showItem);

// function showItem () {
//     itemFive.style.display = 'block';
//   };

//   itemFour.addEventListener('mousedown', showItem);