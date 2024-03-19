// Temos tarefas com comportamentos individuais ou seja teremos varias instâncias.
interface tarefa{
    id:string,
    text:string,
    status:boolean,
}

export default class Tarefa implements tarefa{
    constructor(public id:string, public text:string, public status:boolean){
        this.id = id;
        this.text = text;
        this.status = status;
    }
}