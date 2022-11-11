let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得
const stalker = document.getElementById('stalker'); //ストーカー用のdivを取得

//マウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

//aタグにホバーしたときに、ストーカーにクラスを追加
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //ストーカーにクラスを追加
        stalker.classList.add('hov_');
    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}

//買い出しリスト
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; // input欄に入力した値を代入
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // ADD TODO to LOCALSTORAGE
    saveLocalTodos(todoInput.value);

    // CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<img src="img/check.png" class="fas fa-check">';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // trash  BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<img src="img/trash.png" class="fas fa-trash">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // Clear TODO INPUT value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // ゴミ箱押すと削除
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);

        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    // チェック
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    // CHECK --- HEY DO I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    // CHECK --- HEY DO I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        // Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // チェック
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<img src="img/check.png" class="fas fa-check">';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // ゴミ箱
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<img src="img/trash.png" class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // APPEND TO LIST
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    // CHECK --- HEY DO I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

$('#back').on('click', function () {
    $('.todo-list').removeAttr('todos').prop('todos').change();
});

//window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    //const container = document.querySelector('.container');

    // 葉っぱを生成する関数
    //const createFood = (foodClass, minSizeVal, maxSizeVal) => {
        //const foodEl = document.createElement('span');
        //foodEl.className = `food ${foodClass}`;
        //const minSize = minSizeVal;
        //const maxSize = maxSizeVal;
        //const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        //foodEl.style.width = `${size}px`;
        //foodEl.style.height = `${size}px`;
        //foodEl.style.left = Math.random() * 100 + '%';
        //container.appendChild(foodEl);

        // 一定時間が経てば消す
        //setTimeout(() => {
        //   foodEl.remove();
        //}, 8000);
   // }

    // 生成する間隔をミリ秒で指定する
    // createFoodの引数には、'クラス名', '最小サイズ', '最大サイズ'を渡す
    //setInterval(createFood.bind(this, 'food-1', 30, 50), 1000);
    //setInterval(createFood.bind(this, 'food-2', 30, 50), 1000);
    //setInterval(createFood.bind(this, 'food-3', 30, 50), 1000);
    //setInterval(createFood.bind(this, 'food-4', 30, 50), 1000);
    // setInterval(createFood.bind(this, 'food-5', 30, 50), 1000);
//});