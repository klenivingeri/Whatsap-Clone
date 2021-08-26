# Projeto WhatsApp Clone

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

Projeto desenvolvido como exemplo do Curso Completo de JavaScript na Udemy.com.

### Projeto
![WhatsApp Clone](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/whatsapp.jpg?alt=media&token=5fc78e3b-4871-424f-abfa-b765f2515d0c)

### Recursos Usados

Lista de recursos usados em aula para este projeto

| Recurso | Link |
| ------ | ------ |
| Webpack | https://webpack.js.org/ |
| Firebase Authentication | https://firebase.google.com/docs/auth/?authuser=0 |
| Cloud Firestore | https://firebase.google.com/docs/firestore/?authuser=0 |
| Cloud Functions | https://firebase.google.com/docs/functions/?hl=pt-br |
| Cloud Storage | https://firebase.google.com/docs/storage/?authuser=0 |
| PDF.js | https://mozilla.github.io/pdf.js/ |
| MediaDevices.getUserMedia() | https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia |

----------------------------------------------

#### O index precisa carregar 3 novos arquivos
~~~Html
    <script src="src/utils/Format.js"></script>
    <script src="src/controller/WhatsAppController.js"></script>
    <script src="src/app.js"></script>
    </body> <!--Carregar no  final do body-->
~~~

O projeto possui atualmente 75 elementos com id onde temos que adicionar eventos.
Para facilitar a criação desses eventos vamos atribuir o obj no window.app, assim temos acesso no nosso console.
~~~Javascript
 //app.js
 window.app = new WhatsAppController();
~~~

A função loadElements foi criada para pegarmos os valores que estão nos "id" dos elementos que estão em snake-case e transformalos em camelCase.

~~~Javascript
 // src/controller/WhatsAppController.js
 class WhatsAppController{
  constructor(){
    this.loadElements()
  }
  loadElements(){
    this.el = {}
    document.querySelectorAll('[id]').forEach(element =>{
      this.el[Format.getCamelCase(element.id)] = element;// aqui
    })
    
  }
~~~
Dentro da função acima foi usado o method `Format.getCamelCase()`, para retornar uma string em camelCase
~~~Javascript
//src/utils/Format.js
class Format {
  static getCamelCase(text){
     let div = document.createElement('div');
     div.innerHTML =  `<div data-${text}="id"></div>`;
     return Object.keys(div.firstChild.dataset)[0]
  }
}
~~~
Dessa forma podemos chamar o elemento html com `this.el.nomeDoElementHtml`, ou dentro do navegador(console) `app.el.nomeDoElementHtml`


#### Prototype
Essa função foi criada para evitar a repetição de codigo, e também consegui acessar propriedade mais internas no js.
Para ocultar elementos html na pagina, precisamos utilizar `this.el.app.style.display = "none"`
Não precisamos chegar até o elemento html pra isso, podemos aplitar diretamento no Elemento, antes dele se tornar elemento html.
Com o codigo abaixo é só `this.el.app.hide()`
~~~Javascript
 class WhatsAppController{
  constructor(){
    this.elementsPrototype()
  }
  elementsPrototype(){
    Element.prototype.hide = function(){ //oculta
      this.style.display = 'none';
    }
    Element.prototype.show = function(){  //Mostra
      this.style.display = 'block';
    }
    Element.prototype.toggle = function(){ // caso esteja oculto, mostre, e vice-versa
      this.style.display = (this.style.display === 'none' ? 'block' : 'none')
    }
  }
~~~
