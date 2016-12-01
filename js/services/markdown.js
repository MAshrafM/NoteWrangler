angular.module('NoteWrangler').factory( 'markdown',  function markdownFactory(){
  return {
    parse: function(text){
      return markdown.toHTML(text);
    }
  }
});