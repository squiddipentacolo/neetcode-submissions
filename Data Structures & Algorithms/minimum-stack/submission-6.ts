class MinStack {
    private minStack: number[];
    private historyMinStack: number[];

    constructor() {
        this.minStack = [];
        this.historyMinStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.minStack.push(val);

        if(this.historyMinStack.length === 0 || this.historyMinStack[this.historyMinStack.length - 1] >= val) {
            this.historyMinStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        let popVal = this.minStack.pop();

        if(this.historyMinStack[this.historyMinStack.length - 1] === popVal) {
            this.historyMinStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.historyMinStack[this.historyMinStack.length - 1];
    }
}
