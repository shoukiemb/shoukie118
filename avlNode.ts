
class AVLMarksNode {
    public marks: number;
    public left: AVLMarksNode | null;
    public right: AVLMarksNode | null;
    public height: number;

    constructor(marks: number) {
        this.marks = marks;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

}

export default AVLMarksNode;