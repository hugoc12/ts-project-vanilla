import Tarefa from "./tarefa"

interface lista{
    tarefas:Tarefa[],
    add(value:Tarefa):void,
    del(id:string):void,
    save(value:Tarefa[]):void, // Armazenamento local.
    load(value:Tarefa[]):void,
}

export default class Lista implements lista{
    //Como teremos uma unica coleção de tarefas e uma única lista, teremos uma única instância;
    //pois nesse caso não faz sentido outras instâncias alterar a coleção de tarefas;
    //por isso utilizamos o pattern Singleton, privando o constructor da classe;
    //dessa forma a única instância que teremos é a propria classe, que irá gerenciar efeitos ligados a lista;
    static instance = new Lista();
    private constructor(private _tarefas:Tarefa[] = []){};

    get tarefas():Tarefa[]{
        return Lista.instance._tarefas;
    }

    set tarefas(value:Tarefa[]){
        Lista.instance._tarefas = value;
    }

    add(value:Tarefa): void{
        Lista.instance._tarefas.push(value);
    }

    del(id: string): void {
        Lista.instance._tarefas = Lista.instance._tarefas.filter((el)=>el.id !== id);
    }

    save(value:Tarefa[]):void{
        localStorage.setItem('lista_de_tarefas', JSON.stringify(value));
    }

    load(value: Tarefa[] = []): void {
        Lista.instance._tarefas = value;
    }
}