//import Tarefa from "../models/tarefa";
import Lista from "../models/lista";

interface home{
    ul:HTMLUListElement,
    render(value:Lista):void,
    clear():void,
}

export default class Home implements home{
    static instace = new Home(document.getElementById('listaTarefas') as HTMLUListElement);
    private constructor(private _ul:HTMLUListElement){}

    get ul():HTMLUListElement{
        return Home.instace._ul;
    }

    clear(): void {
        Home.instace._ul.innerHTML = '';
    }

    render(list: Lista): void {
        //Load tarefas.
        list.tarefas.forEach((el)=>{
            let li = document.createElement('li');
            li.setAttribute('id', el.id);
            if(el.status){
                li.setAttribute('class', 'tarefa-feita');
            }

            let span = document.createElement('span');
            span.innerHTML = el.text;

            let div = document.createElement('div');
            let btt1 = document.createElement('button');
            let btt2 = document.createElement('button');
            btt1.innerHTML = 'OK';
            btt2.innerHTML = 'X';
            div.appendChild(btt1);
            div.appendChild(btt2);

            li.appendChild(span);
            li.appendChild(div);

            Home.instace._ul.appendChild(li);

            btt1.addEventListener('click', ()=>{
                if(el.status){
                    el.status = false;
                }else{
                    el.status = true;
                }
                list.save(list.tarefas);
                Home.instace.clear();
                Home.instace.render(list);
            })

            btt2.addEventListener('click', ()=>{
                list.del(el.id);
                list.save(list.tarefas);
                Home.instace.clear();
                Home.instace.render(list);
            })

        })
    }
}