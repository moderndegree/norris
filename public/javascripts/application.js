function a(c){c.c=[{name:"Morris",color:"Orange"},{name:"Spades",color:"Black"}];console.log("scope",c);console.log("cats",this.c)}a.$inject=["$scope"];var b=angular.module("norris.cats",[]).controller("CatsController",a);function d(c){this.d=c;this.b()}var e=["norris","quotes","QuotesController"],f=this;e[0]in f||!f.execScript||f.execScript("var "+e[0]);for(var g;e.length&&(g=e.shift());)e.length||void 0===d?f=f[g]?f[g]:f[g]={}:f[g]=d;d.$inject=["$scope"];d.prototype.a=function(){var c=h;return c[Math.floor(Math.random()*c.length)]};d.prototype.getNewQuote=d.prototype.a;d.prototype.b=function(){this.d.quote=this.a()};d.prototype.updateQuote=d.prototype.b;var h="When Chuck Norris throws exceptions, it\u2019s across the room.;All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds.;Chuck Norris doesn\u2019t have disk latency because the hard drive knows to hurry the hell up.;Chuck Norris writes code that optimizes itself.;Chuck Norris can\u2019t test for equality because he has no equal.;Chuck Norris doesn\u2019t need garbage collection because he doesn\u2019t call .Dispose(), he calls .DropKick().;Chuck Norris\u2019s first program was kill 9.;Chuck Norris burst the dot com bubble.;All browsers support the hex definitions #chuck and #norris for the colors black and blue.;MySpace actually isn\u2019t your space, it\u2019s Chuck\u2019s (he just lets you use it).;Chuck Norris can write infinite recursion functions\u2026and have them return.;Chuck Norris can solve the Towers of Hanoi in one move.;The only pattern Chuck Norris knows is God Object.;Chuck Norris finished World of Warcraft.;Project managers never ask Chuck Norris for estimations\u2026ever.;Chuck Norris doesn\u2019t use web standards as the web will conform to him.;\u201cIt works on my machine\u201d always holds true for Chuck Norris.;Whiteboards are white because Chuck Norris scared them that way.;Chuck Norris doesn\u2019t do Burn Down charts, he does Smack Down charts.;Chuck Norris can delete the Recycling Bin.;Chuck Norris\u2019s beard can type 140 wpm.;Chuck Norris can unit test entire applications with a single assert.;Chuck Norris doesn\u2019t bug hunt as that signifies a probability of failure, he goes bug killing.;Chuck Norris\u2019s keyboard doesn\u2019t have a Ctrl key because nothing controls  Chuck Norris.;When Chuck Norris is web surfing websites get the message \u201cWarning: Internet Explorer has deemed this user to be malicious or dangerous.  Proceed?\u201d.".split(";");var k=angular.module("norris.quotes",[]).controller("QuotesController",d).directive("quotesGenerator",function(){return{scope:!0,restrict:"A",templateUrl:"partials/quotes/quotes.html",controller:d,controllerAs:"quotesCtrl"}}).service("QuotesService",function(){console.log("Service Says: I should get a quote...")});angular.module("norris",[b.name,k.name]);
