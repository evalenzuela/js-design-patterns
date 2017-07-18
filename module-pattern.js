/**
 * Created by eduardovalenzuela on 7/18/17.
 */

/*For simplicity let's assume a car is build out of three parts:
-Motor
-Chasis
-Wheels
 */
var CarCostEstimation = (function() {

    //Let's imagine script is getting best price from different api's
    function getBestMotorCost() {

        return 3000;
    }

    function getBestChasisCost() {
        return 1000;
    }

    function getBestWheelsCost() {
        return 400;
    }

    return {
        getEstimatedCost: function() {
            var chasisCost = getBestChasisCost();
            var motorCost = getBestMotorCost();
            var wheelsCost = getBestWheelsCost();

            return chasisCost + motorCost + wheelsCost;
        }
    }

})();

var totalCost = CarCostEstimation.getEstimatedCost();
console.log(totalCost);