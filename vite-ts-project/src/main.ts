import Lista from "./models/lista";
import Tarefa from "./models/tarefa";
import Home from "./template/toDoList";

(function initApp():void{
    let listatarefas:Tarefa[] = [];
    if(localStorage.getItem('lista_de_tarefas')){
        listatarefas = JSON.parse(localStorage.getItem('lista_de_tarefas') as string);
    }
    Lista.instance.load(listatarefas);
    Home.instace.render(Lista.instance);

    let bttAdd = document.getElementById('bttAdd') as HTMLButtonElement;
    let inputText = document.getElementById('inputText') as HTMLInputElement;
    bttAdd.addEventListener('click', ()=>{
        let id:string;
        if(Lista.instance.tarefas.length === 0){
            id = '0';
        }else{
            id = String(Lista.instance.tarefas.length)
        }
       
        Lista.instance.add({
            id:id,
            text:inputText.value,
            status:false,
        })
    //     console.log(Lista.instance.tarefas);
        Lista.instance.save(Lista.instance.tarefas);
        Home.instace.clear();
        Home.instace.render(Lista.instance);
    })
})();