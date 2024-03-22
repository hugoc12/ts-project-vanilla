import Tarefa from "./Tarefa"
import Home from "../template/home"

interface lista{
    tarefas: Tarefa[],
    add(tarefa:Tarefa):void,
    remove(tarefa:Tarefa):void,
    mark(tarefa:Tarefa):void,
    load(tarefas:Tarefa[]):void,
    //save(tarefas:Tarefa[]):void,
}

export default class Lista implements lista{
    constructor(private _tarefas:Tarefa[]){}
    get tarefas():Tarefa[]{
        return this._tarefas;
    }

    load(tarefas: Tarefa[]): void {
        this._tarefas = tarefas;
    }

    mark(tarefa: Tarefa): void {
        let home = new Home();
        let li = document.getElementById(tarefa.id) as HTMLLIElement;
        li.setAttribute('class', 'tarefa-feita');

        let newTarefasArray = this._tarefas.map((el)=>{
            if(el.id == tarefa.id){
                return el.status ? {id:el.id, text:el.text, status:false}:{id:el.id, text:el.text, status:true}
            }else{
                return el;
            }
        })

        this.save(newTarefasArray);
        home.renderUl(newTarefasArray);
    }

    add(tarefa: Tarefa): void {
        let home = new Home();
        this._tarefas.push(tarefa);
        this.save(this._tarefas);
        home.renderUl(this._tarefas);
    }

    remove(tarefa: Tarefa): void {
        let home = new Home();
        let newTarefasArray = this._tarefas.filter((el)=>el.id != tarefa.id);
        this.save(newTarefasArray);
        home.renderUl(newTarefasArray);
    }

    private save(tarefas: Tarefa[]): void {
        let jsonStringfy = JSON.stringify(tarefas);
        localStorage.setItem('lista_de_tarefas', jsonStringfy);
    }
}