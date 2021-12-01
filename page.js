//Percorrer o DOM
function walkTree (root,level){
    if (root.nodeType == Node.TEXT_NODE){
        console.log(level + 'text:' + root.textContent);
    } else {
        console.log (level + root.nodeName);
    }
    for (const child of root.childNodes){
        walkTree(child, level + "  ");
    }
}
walkTree(document.querySelector('html'), "");

const linkImagem = "https://images.vexels.com/media/users/3/151623/isolated/lists/7bfcfa638555045165fb97bfcce2110c-caramelo-de-chocolate.png";
function numeroImagens(contador){
    const body = document.querySelector('body');
    const texto = document.createElement('h1');
    texto.textContent = "Número de imagens: " + contador;
    document.body.appendChild(texto);
}

function trocaImagem(imgs){
    for (const imagens of imgs){
        const width = imagens.width;
        const height = imagens.height;
        imagens.width = width;
        imagens.height = height;
        imagens.src = linkImagem;
    }
}
const imagens = document.querySelectorAll('img');
numeroImagens(imagens.length);
trocaImagem(imagens);
///////////////////////////////////////////

// const IMG = "https://prog-web-bucket-20-2.s3.amazonaws.com/images/fullmetal-alchemist-fullmetal-alchemist-alphonse-elric-edward-elric-wallpaper-preview.jpg"

// function showNumber (numberOfImgs) {
//     if(numberOfImgs == undefined || numberOfImgs == null) return;

//     const body = document.querySelector('body');
//     const child = document.createElement('h1');
//     child.textContent = "Número de imagens: " + numberOfImgs.toString();
//     //child.style.backgroundColor = body.style.backgroundColor;
//     child.style.color = body.style.backgroundColor == 'black' ? white : body.style.backgroundColor;
//     child.style.fontSize = '5em';

//     body.insertBefore(child, body.firstChild);  
// }

// function changeImages (imgs) {
//     for(const img of imgs) {
//         const width = img.width;
//         const height = img.height;
//         img.src = IMG;
//         img.width = width;
//         img.height = height;
//     }
// }

// const imgs = document.querySelectorAll('img');
// showNumber(imgs.length);
// changeImages(imgs);