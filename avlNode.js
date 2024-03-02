"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLMarksNode = /** @class */ (function () {
    function AVLMarksNode(marks) {
        this.marks = marks;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    return AVLMarksNode;
}());
exports.default = AVLMarksNode;
