 let musicas = [
    {titulo: 'Let Her Go', artista: 'Passenger', src: 'musicas/Passenger_-_Let_Her_Go_(BornMP3.com).mp3', img:'imagens/Let_Her_Go.jpg'},
    {titulo: 'Iris', artista: 'The Goo Goo Dolls', src: 'musicas/The_Goo_Goo_Dolls_-_Iris_(BornMP3.com).mp3', img:'imagens/iris.webp'},
    {titulo: 'Oasis', artista: 'Wonderwall', src: 'musicas/Oasis_-_Wonderwall_(BornMP3.com).mp3', img:'imagens/Oasis_-_Wonderwall.png'}

 ];
 
 let musica = document.querySelector('audio');

 let duracaoMusica = document.querySelector('.fim');

 let indexMusica = 0;



   let imagem = document.querySelector('.capa');
   let nomeMusica = document.querySelector('.descricao h2');
   let nomeArtista = document.querySelector('.descricao i')


 //eventos  

 document.querySelector('.play').addEventListener('click', tocarMusica);
 document.querySelector('.pause').addEventListener('click', pararMusica);

 musica.addEventListener('timeupdate',atualizarBarra);


 document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
 });

 document.querySelector('.proxima').addEventListener('click',() => {
     indexMusica++;
     if (indexMusica > 2){
         indexMusica = 0;
     }
    renderizarMusica(indexMusica);

});



 //funcoes


 renderizarMusica(indexMusica);


 function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
       nomeMusica.textContent = musicas[index].titulo;
       nomeArtista.textContent = musicas[index].artista;
       imagem.src = musicas[index].img;
       duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
    
    });
}


 function tocarMusica(){
     musica.play();
     document.querySelector('.pause').style.display = 'block';
     document.querySelector('.play').style.display = 'none';
 }

 function pararMusica(){
     musica.pause();
     document.querySelector('.pause').style.display = 'none';
     document.querySelector('.play').style.display = 'block';
 }

 function atualizarBarra(){
     let barra = document.querySelector('progress');
     barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
     let tempoDecorrido = document.querySelector('.inicio');
     tempoDecorrido.textContent = segundoParaMinutos(Math.floor(musica.currentTime));
 }

 function segundoParaMinutos(segundos){
     let campoMinutos = Math.floor(segundos / 60);
     let campoSegundos = segundos % 60;
     if (campoSegundos < 10) {
         campoSegundos =':0'+ campoSegundos;
        }

    return campoMinutos + campoSegundos;    
 }



