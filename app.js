function pesquisar(){
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum atleta encontrado</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar a lista de resultados formatada em HTML.
    let lista = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada elemento "dado" no array "dados".
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            // Concatena HTML para criar um novo elemento de resultado com título, descrição e link.
            lista += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        }
        
    }

    // Atribui a string HTML completa à propriedade innerHTML da seção, substituindo o conteúdo existente.
    section.innerHTML = lista;
}