class WhatsAppController{
  constructor(){
    console.log('WhatsAppController ok')
    this.elementsPrototype();
    this.loadElements()

    this.teste()
    
  }

  loadElements(){
    this.el = {}

    document.querySelectorAll('[id]').forEach(element =>{
      this.el[Format.getCamelCase(element.id)] = element;
      //console.log(Format.getCamelCase(element.id))
      
    })
    
  }
  elementsPrototype(){
    Element.prototype.hide = function(){
      this.style.display = 'none';
    }
    Element.prototype.show = function(){
      this.style.display = 'block';
    }
    Element.prototype.toggle = function(){
      this.style.display = (this.style.display === 'none' ? 'block' : 'none')
    }

  }
}