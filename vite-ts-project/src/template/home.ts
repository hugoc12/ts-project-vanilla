import Tarefa from "../models/Tarefa";
import Lista from "../models/Lista";

export default class Home{
    constructor(){}
    renderUl(tarefas:Tarefa[]){
        let lista = new Lista(tarefas);
        lista.load(tarefas);

        let ul = document.getElementById('listaTarefas') as HTMLElement;
        ul.innerHTML = '';

        tarefas.forEach((el)=>{
            let li = document.createElement('li') as HTMLLIElement;
            let span = document.createElement('span') as HTMLSpanElement;
            let div = document.createElement('div') as HTMLDivElement;
            let btt1 = document.createElement('button') as HTMLButtonElement;
            let btt2 = document.createElement('button') as HTMLButtonElement;

            li.setAttribute('id', el.id);
            if(el.status){
                li.setAttribute('class', 'tarefa-feita')
            }
            span.innerHTML = el.text;

            btt1.innerHTML = 'OK'
            btt1.addEventListener('click', ()=>{
                console.log(`mark ${el.id}`);
                lista.mark(el);
            })

            btt2.innerHTML = 'X'
            btt2.addEventListener('click', ()=>{
                lista.remove(el);
            })

            div.appendChild(btt1);
            div.appendChild(btt2);

            li.appendChild(span);
            li.appendChild(div);
            ul.appendChild(li);
        })
    }
}