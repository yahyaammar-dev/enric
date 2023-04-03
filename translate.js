function Translate() { 
    //initialization
    this.init =  function(attribute, lng){
        this.lng = lng;    
        this.attribute = attribute;
    }
    //translate 
    this.process = function(){
                _self = this;
                var xrhFile = new XMLHttpRequest();
                //load content data 
                if(localStorage.getItem('lang')){
                    this.lng = localStorage.getItem('lang')
                }
                xrhFile.open("GET", "./"+this.lng+".json", false);
                xrhFile.onreadystatechange = function ()
                {
                    if(xrhFile.readyState === 4)
                    {
                        if(xrhFile.status === 200 || xrhFile.status == 0)
                        {
                            var LngObject = JSON.parse(xrhFile.responseText);
                            console.log(LngObject["name1"]);
                            var allDom = document.getElementsByTagName("*");
                            for(var i =0; i < allDom.length; i++){
                                var elem = allDom[i];
                                var key = elem.getAttribute(_self.attribute);
                                 
                                if(key != null) {
                                     console.log(key);
                                     elem.innerHTML = LngObject[key]  ;
                                }
                            }
                     
                        }
                    }
                }
                xrhFile.send();
    }    
}