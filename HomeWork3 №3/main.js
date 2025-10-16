let inp = document.getElementById('inp');
let btnAdd = document.getElementById('btnAdd');
let list = document.getElementById('list');
let dark = document.getElementById('dark');
let light = document.getElementById('light');

btnAdd.onclick = () => {
    const text = inp.value.trim();
    if (!text) return;

    let li = document.createElement('li');
    let p = document.createElement('p');
    let div = document.createElement('div');

    let buttonChange = document.createElement('button');
    let buttonDelete = document.createElement('button');

    buttonChange.textContent = 'Change';
    buttonDelete.textContent = 'Delete';


    [buttonChange, buttonDelete].forEach(btn => {
        btn.classList.add('btn');

        if (document.body.classList.contains('dark-theme')) {
            btn.style.borderColor = '#f0f8ff';
            btn.style.color = '#f0f8ff';
            btn.style.backgroundColor = 'transparent';
        } else {
            btn.style.borderColor = '#121212';
            btn.style.color = '#121212';
            btn.style.backgroundColor = '#f0f8ff';
        }
    });

    p.textContent = text;
    div.append(buttonChange, buttonDelete);
    li.append(p, div);
    list.append(li);
    inp.value = '';

    buttonDelete.onclick = () => li.remove();
    buttonChange.onclick = () => p.classList.toggle('done');
};


dark.onclick = () => {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#f0f8ff';

    const continer = document.querySelector('.continer');
    continer.style.backgroundColor = '#121212';
    continer.style.borderColor = '#f0f8ff';

    const addTodoInput = document.querySelector('#inp');
    addTodoInput.style.color = '#f0f8ff';
    addTodoInput.style.borderColor = '#f0f8ff';

    document.body.classList.add('dark-theme');

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.borderColor = '#f0f8ff';
        btn.style.color = '#f0f8ff';
        btn.style.backgroundColor = 'transparent';
    });
};


light.onclick = () => {
    document.body.style.backgroundColor = '#f0f8ff';
    document.body.style.color = '#121212';

    const continer = document.querySelector('.continer');
    continer.style.backgroundColor = '#f0f8ff';
    continer.style.borderColor = '#121212';

    const addTodoInput = document.querySelector('#inp');
    addTodoInput.style.color = '#121212';
    addTodoInput.style.borderColor = '#121212';

    document.body.classList.remove('dark-theme');

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.borderColor = '#121212';
        btn.style.color = '#121212';
        btn.style.backgroundColor = '#f0f8ff';
    });
};
