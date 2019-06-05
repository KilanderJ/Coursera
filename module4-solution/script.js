

(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
   for ( var iName in names) {

     var firstLetter = names[iName].charAt(0).toLowerCase();

     if ( firstLetter == "j" ) {
       byeSpeaker.speak(names[iName]);
     } else {
       helloSpeaker.speak(names[iName]);
     };

   };

})(window);
