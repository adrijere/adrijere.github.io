window.onload = function()
{
    var canvas = document.getElementById('map');
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }
    
    var context = canvas.getContext('2d');
    if(!context)
    {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
}

var roguelike = new function() {
    this.player;
    this.map;
    this.width;
    this.height;
    this.create_map = function(x, y, color) {
     var canvas = document.getElementById('map');
        canvas.width = x;
        canvas.height = y;
        canvas.style.backgroundColor = color || "green";
    };
    this.create_player = function(x, y, sprite) {
    document.getElementById("map").innerHTML = "<div id=\"player\"></div>";
    var player = document.getElementById('player');
    player.style.width = x;
    player.style.height = y;
    player.style.backgroundColor = "red";
    };
}