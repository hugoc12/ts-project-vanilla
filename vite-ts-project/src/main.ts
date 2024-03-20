import Lista from "./models/lista";
import Tarefa from "./models/tarefa";
import Home from "./template/toDoList";

(function initApp():void{
    let listatarefas:Tarefa[] = [];
    if(localStorage.getItem('lista_de_tarefas')){
        listatarefas = JSON.parse(localStorage.getItem('lista_de_tarefas') as string);
    }
    Lista.instance.load(listatarefas);
    console.log(Lista.instance.tarefas);
    Home.instace.render(Lista.instance);

    let bttAdd = document.getElementById('bttAdd') as HTMLButtonElement;
    let inputText = document.getElementById('inputText') as HTMLInputElement;
    bttAdd.addEventListener('click', ()=>{
        let id:string;
        let numbers = Lista.instance.tarefas.map((el)=>Number(el.id));
        if(numbers.length > 0){
            id = String(Math.max(...numbers)+1);
        }else{
            id = '0';
        }
        
        console.log(id);

        Lista.instance.add({
            id:id,
            text:inputText.value,
            status:false,
        })
    
        Lista.instance.save(Lista.instance.tarefas);
        Home.instace.clear();
        Home.instace.render(Lista.instance);
    })
})();