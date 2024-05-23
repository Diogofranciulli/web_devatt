 const btnClicar = document.querySelector('#btnClicar')
 const listaFilmes = document.querySelector('#listaFilmes')
 const inputUsuario = document.querySelector('#inputUsuario')


 const filmes = [
    {
        nome : "poderoso chefao",
        diretor : 'Copolla',
        ano: 1972 ,
        sinopse: "lorem ipsum dolor sit ame"
    },
    {
    nome: 'meninas malvadas',
    diretor: "nao faco ideia",
    ano: 2004,
    sinopse: "jdhsjfdajfoagkied"
    },
    {
    nome:"os trapalhoes na calda do cometa",
    diretor:'didi',
    ano: 1962,
    sinopse: 'didi'

     }
]

 btnClicar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault()
    console.log(infosDoEvento.target.parentNode)

    let novoFilme = document.createElement('li')
    novoFilme.innerText =  inputUsuario.value
    
    let btnEditar = document.createElement('button')
    btnEditar.innerText = 'editar'  
    btnEditar.addEventListener('click' , function(){
        novoFilme.style.color = 'green'
        novoFilme.classList.toggle('fundo-preto')
    })

/*     novoFilme.innerHTML = `
    <h1>Titulo do filme</h1>
    <p>Sinopse do filme</p>
    <p>oi</p>   
    ` */

    let imagemFilme = document.createElement('img')
    imagemFilme.src=''
    imagemFilme.alt = ''

    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme)
    
    inputUsuario.value = ""

 })

 //Create
 function criarFilme(){
    let novoFilme = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }

    filmes.unshift(novoFilme)
    renderizarNaTela()


 }
 window.onload = renderizarNaTela()
 //read
 function renderizarNaTela(){
    listaFilmes.innerHTML = ''
    filmes.forEach(
        filme =>{
            let novoFilme = document.createElement('li')
            novoFilme.innerText = filme.nome
            listaFilmes.append(novoFilme)

        }

    )
 }
//update
function atualizarFrame(){}
//delete
function removerFilme(){}

 