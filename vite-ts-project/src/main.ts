let inputText = document.getElementById('inputText') as HTMLInputElement;
let bttAdd = document.getElementById('bttAdd') as HTMLButtonElement;
let ul = document.getElementById('listaTarefas') as HTMLUListElement;

interface tarefa {
    id: string,
    text: string,
    status: boolean,
}

let tarefas: tarefa[] = [
    {
        id: '0',
        text: 'Typescript aula 1',
        status: false,
    },
    {
        id: '1',
        text: 'Node aula 2',
        status: true,
    },
    {
        id: '2',
        text: 'Solid OOP',
        status: false,
    }
];
let valueText: string;

for (let value of tarefas) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let divBtts = document.createElement('div');
    let btt1 = document.createElement('button');
    let btt2 = document.createElement('button');

    btt1.textContent = 'OK';
    btt1.addEventListener('click', () => {
        let element = document.getElementById(String(value.id)) as HTMLElement;
        if (element.getAttribute('class') == 'tarefa-feita') {
            element.setAttribute('class', '');
        } else {
            element.setAttribute('class', 'tarefa-feita');
        }

    })

    btt2.textContent = 'X';
    btt2.addEventListener('click', () => {
        tarefas = tarefas.filter((el) => {
            if (el.id != value.id) {
                return true;
            }
        })
        let element = document.getElementById(String(value.id)) as HTMLElement;
        element.remove();
    })

    span.textContent = value.text;

    divBtts.appendChild(btt1);
    divBtts.appendChild(btt2);

    li.appendChild(span);
    li.appendChild(divBtts);

    li.setAttribute('id', String(value.id));
    if (value.status) {
        li.setAttribute('class', 'tarefa-feita');
    }

    ul.appendChild(li);
}

bttAdd.addEventListener('click', () => {
    let id:string;
    if(tarefas.length >= 1){
        id = String(Number(tarefas[tarefas.length-1].id) + 1);
    }else{
        id = '0';
    }
    
    let li = document.createElement('li');
    let span = document.createElement('span');
    let divBtts = document.createElement('div');
    let btt1 = document.createElement('button');
    let btt2 = document.createElement('button');

    btt1.textContent = 'OK';
    btt1.addEventListener('click', () => {
        let element = document.getElementById(String(id)) as HTMLElement;
        if (element.getAttribute('class') == 'tarefa-feita') {
            element.setAttribute('class', '');
        } else {
            element.setAttribute('class', 'tarefa-feita');
        }

    })

    btt2.textContent = 'X';
    btt2.addEventListener('click', () => {
        tarefas = tarefas.filter((el) => {
            if (el.id != id) {
                return true;
            }
        })
        let element = document.getElementById(String(id)) as HTMLElement;
        element.remove();
    })

    span.textContent = inputText.value;

    divBtts.appendChild(btt1);
    divBtts.appendChild(btt2);

    li.appendChild(span);
    li.appendChild(divBtts);

    li.setAttribute('id', String(id));
    ul.appendChild(li);
    tarefas = [...tarefas, {
        id:id,
        text:inputText.value,
        status:false
    }]
})

inputText.addEventListener('keyup', () => {
    valueText = inputText.value;
})