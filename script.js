function verificar(){

   var dada = new Date()
   var ano = dada.getFullYear()
   var bano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   if (bano.value == 0 || bano.value > ano){
       alert('[ERRO] Preencha o bagulho direito!')
       res.innerHTML = 'Ta errado esse bagulho ai'
     
   } else{
        var fsex = window.document.getElementsByName('sex')
        var idade = ano - Number(bano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/bebe-m.jpg')

            } else if(idade >= 10 && idade < 17){
                img.setAttribute('src', 'imagem/joven-m.jpg')
            } 
            else if (idade >=17 && idade < 25){
                img.setAttribute('src', 'imagem/jovem-m.webp')

            } else if (idade >=30 && idade < 50){
                img.setAttribute('src', 'imagem/aduto-m.jpeg')

            }else{
                img.setAttribute('src', 'imagem/idoso-m.jpg')
            }
        } else if(fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/bebe-f.jpg')

            } else if (idade >=10 && idade < 17){
                img.setAttribute('src', 'imagem/jovem-f.webp')

            } else if (idade >=17 && idade < 25){
                img.setAttribute('src', 'imagem/jovem-f-jpg.avif')

            } else if (idade >=30 && idade < 50){
                img.setAttribute('src', 'imagem/aduto-f.jpeg')

            }else{
                img.setAttribute('src', 'imagem/idoso-f.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
        res.appendChild(img).style.borderRadius = '50%'
       
        
   }
         

}
              