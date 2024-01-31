// 1) ci assicuriamo di aver caricato tutto (html,css)
window.onload = function () {
  console.log("pagina caricata");
  //   invoco l'ascoltatore form
  ascoltatoreForm();
};

// 2) mettere un ASCOLTATORE sul form (sumbit, sottomissione del form, quindi verificare quando l'utente clicca su crea)
const ascoltatoreForm = function () {
  const form = document.querySelector("form");
  //  aggiungi ascoltatore
  form.addEventListener("submit", function (e) {
    // per fissare
    e.preventDefault();
    // richiamiamo tre funzioni che inseriamo sotto, oguna che segue una logica
    task();
    complete();
    deleteRiga();
  });
};

// FUNZIONE TASK

const task = function () {
  // prendo l'id tasks attualmente vuoto
  const tasks = document.querySelector("#tasks");
  // ho preso l'input che si trova dentro newTask,
  const inputField = document.querySelector("#newTask input");

  //   con ${inputField.value} rendo dinamico quello che scrivo dentro, così che possa cambiare ogni volta
  let newTask = `
 <div class="newTask" ></div> 
 <span>
        ${inputField.value}
 </span>
 <button class=stilecestino>
 <i class="far fa-trash-alt"></i>
 </button>
  
`;

  // aggiungo quanto scritto nella variabile newTask dentro all'id tasks
  tasks.innerHTML += newTask;
};

// COMPLETE
