import Tarefa from "./models/Tarefa";
import Lista from "./models/Lista";
import Home from "./template/home";

(function initApp(){
    let home = new Home();
    let tarefas:Tarefa[] = [];
    let jsonList = localStorage.getItem('lista_de_tarefas');
    if(jsonList){
        tarefas = JSON.parse(jsonList);
    }

    home.renderUl(tarefas);

    let bttAdd = document.getElementById('bttAdd') as HTMLButtonElement;
    let input = document.getElementById('inputText') as HTMLInputElement;

    bttAdd.addEventListener('click', ()=>{
        let _tarefas:Tarefa[] = [];
        let _jsonList = localStorage.getItem('lista_de_tarefas');
        let id:string;
        if(_jsonList){
            _tarefas = JSON.parse(_jsonList);
        }
        let lista = new Lista(_tarefas);
        if(_tarefas.length > 0){
            id = String(Math.max(..._tarefas.map((el)=>Number(el.id)))+1)
        }else{
            id = '0';
        }
        
        lista.add({
            id:id,
            text:input.value,
            status:false,
        })
    })

})()