"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var avlNode_1 = require("./avlNode");
var MarksTree = /** @class */ (function () {
    function MarksTree() {
        this.countNode = 0;
        this.root = null;
    }
    MarksTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    MarksTree.prototype.updateHeight = function (node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    };
    MarksTree.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    MarksTree.prototype.insert = function (marks) {
        this.root = this.insertData(this.root, marks);
        this.countNode++;
    };
    MarksTree.prototype.insertData = function (node, marks) {
        if (!node) {
            return new avlNode_1.default(marks);
        }
        else if (marks < node.marks) {
            node.left = this.insertData(node.left, marks);
            return node;
        }
        else if (marks > node.marks) {
            node.right = this.insertData(node.right, marks);
            return node;
        }
        this.updateHeight(node);
        var balance = this.getBalanceFactor(node);
        if (balance > 1) {
            var select = node.left;
            if (marks < select.marks) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            var select = node.left;
            if (marks > select.marks) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    MarksTree.prototype.rightRotate = function (node) {
        var x = node.left;
        var T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    MarksTree.prototype.leftRotate = function (node) {
        var x = node.right;
        var T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    MarksTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.marks);
            this.inOrderTraversal(node.right);
        }
    };
    // public isExist(marks: number): void {
    //     let node: AVLMarksNode | null;
    //     if (node.marks) {
    //         this.isExist(node.left);
    //         console.log(node.marks);
    //         this.isExist(node.right);
    //     }
    // }
    MarksTree.prototype.treeHeight = function () {
        this.root ? console.log(this.root.height) : console.log(0);
    };
    MarksTree.prototype.nodeCount = function () {
        console.log(this.countNode);
    };
    return MarksTree;
}());
exports.default = MarksTree;
