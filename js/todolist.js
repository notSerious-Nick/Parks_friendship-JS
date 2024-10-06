const memo = document.querySelector(".todolist");
const inputs = document.querySelector(".input");

let todos = []
const TODOS_KEY = "todos";

function submitMemo(event){
    event.preventDefault();
    const mention = inputs.value;
    inputs.value ="";
    const store = {
        text: mention,
        id: Date.now()
    };
    todos.push(store);
    paintTodo(store);
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(store){
    const notice = document.createElement("div");
    const noticeMemo = document.createElement("h1");
    const noticeCheckBtn = document.createElement("button");
    const noticeTrashBtn = document.createElement("button");
    
    notice.id = store.id;
    noticeMemo.innerHTML = store.text;
    noticeCheckBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    noticeTrashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    
    notice.appendChild(noticeMemo);
    notice.appendChild(noticeCheckBtn);
    notice.appendChild(noticeTrashBtn);
    document.querySelector(".todolist-memos").appendChild(notice);

    noticeCheckBtn.addEventListener("click", () => {
        noticeMemo.classList.toggle("my-line-through");
    });

    noticeTrashBtn.addEventListener("click", (event) => {
        let temp = event.target.parentElement;
        if(temp.tagName === "BUTTON"){
            temp = temp.parentElement;
        }
        temp.remove();
        todos = todos.filter((toDo) => toDo.id !== parseInt(temp.id));
        saveTodo();
    });
}

memo.addEventListener("submit", submitMemo);

const saved = localStorage.getItem(TODOS_KEY);

if(saved !== null){
    todos = JSON.parse(saved);
    JSON.parse(saved).forEach(paintTodo);
}
