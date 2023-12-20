"use strict";
// 5-SLOT MACHINE
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.moneyCount = 0;
    }
    SlothMachine.prototype.counter = function () {
        var i = 0;
        return function () { return ++i; };
    };
    SlothMachine.prototype.generateRoulettes = function () {
        var roulettes = [];
        var num = Math.round(Math.random() * 1);
        for (var i = 0; i <= SlothMachine.numberOfRoulettes; i++) {
            if (num === 1) {
                roulettes.push(true);
            }
            else {
                roulettes.push(false);
            }
        }
        console.log(roulettes);
        return roulettes;
    };
    SlothMachine.prototype.checkResult = function (results) {
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result !== true) {
                return false;
            }
        }
        return true;
    };
    SlothMachine.prototype.showResultMessage = function (result) {
        if (result) {
            console.log("Congratulations!!. You won ".concat(this.moneyCount, " coins"));
            this.setMoneyCounterToCero();
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    SlothMachine.prototype.setMoneyCounterToCero = function () {
        this.moneyCount = 0;
    };
    SlothMachine.prototype.play = function () {
        this.moneyCount += this.counter()();
        var roulettes = this.generateRoulettes();
        var result = this.checkResult(roulettes);
        this.showResultMessage(result);
    };
    SlothMachine.numberOfRoulettes = 2;
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
