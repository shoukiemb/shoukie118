import AVLMarksNode from "./avlNode";

class MarksTree {
    public root: AVLMarksNode | null;
    public countNode: number = 0;

    constructor() {
        this.root = null;
    }

    private getHeight(node: AVLMarksNode | null): number {
        return node ? node.height : 0;
    }
    private updateHeight(node: AVLMarksNode) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))

    }

    private getBalanceFactor(node: AVLMarksNode): number {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    public insert(marks: number): void {
        this.root = this.insertData(this.root, marks);
        this.countNode++;
    }

    private insertData(node: AVLMarksNode | null, marks: number): AVLMarksNode {
        if (!node) {
            return new AVLMarksNode(marks);
        }
        else if (marks < node.marks) {
            node.left = this.insertData(node.left, marks)
            return node
        }
        else if (marks > node.marks) {
            node.right = this.insertData(node.right, marks);
            return node
        }

        this.updateHeight(node);
        let balance: number = this.getBalanceFactor(node);

        if (balance > 1) {
            let select = node.left as AVLMarksNode;

            if (marks < select.marks) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left as AVLMarksNode);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.left as AVLMarksNode;
            if (marks > select.marks) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.left as AVLMarksNode);
                return this.leftRotate(node);
            }
        }


        return node;


    }

    private rightRotate(node: AVLMarksNode): AVLMarksNode {
        let x: AVLMarksNode = node.left as AVLMarksNode;
        let T2 = x.right as AVLMarksNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    private leftRotate(node: AVLMarksNode): AVLMarksNode {
        let x: AVLMarksNode = node.right as AVLMarksNode;
        let T2 = x.left as AVLMarksNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    public inOrderTraversal(node: AVLMarksNode | null): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.marks);
            this.inOrderTraversal(node.right);
        }
    }

    public isExist(marks: number): void {
        let node: AVLMarksNode | null;
        if (node.marks) {
            this.isExist(node.left);
            console.log(node.marks);
            this.isExist(node.right);
        }
    }

    public treeHeight(): void {

        this.root ? console.log(this.root.height) : console.log(0);
    }
    public nodeCount(): void {
        console.log(this.countNode);
    }
    public deleteNode(marks: number): void {

    }

}

export default MarksTree;