
define(function(require,exports,module){
    var txtUI = new laya.ui.Label();
    var bestScore = laya.net.LocalStorage.getItem("bestScore")||"0";
    exports.init = function(x,y){
        txtUI.text ="Best Score:"+ bestScore + "\nCurrent Score:" +
                    String(require("./game.js").game.score);
        txtUI.font ="Arial";
        txtUI.bold = true;
        txtUI.fontSize = 24;
        txtUI.zOrder = 100;
        txtUI.color = "#FF0000";
        txtUI.leading = 8;
        
        txtUI.pos(x,y);
        
        Laya.stage.on("scoreChange",module,function(){
            if (require("./game.js").game.score > bestScore){
                bestScore = require("./game.js").game.score;
                laya.net.LocalStorage.setItem("bestScore",bestScore);
            }
            txtUI.text = "Best Score:"+ bestScore + "\nCurrent Score:" +
                    String(require("./game.js").game.score);
        });
        return txtUI;      
    }
    
});
