export class Counter {

    wordIndex;
    displayWordIndex;
    errorsCount;
    totalCount;

    constructor(totalCount) {
        this.totalCount = totalCount;
        this.reset();
    }

    increase() {
        this.wordIndex++;
        this.full = this.wordIndex === this.totalCount;

        if (this.full) {
            return;
        }

        this.displayWordIndex++;
    }

    countError() {
        this.errorsCount++;
    }

    reset() {
        this.wordIndex = 0;
        this.displayWordIndex = 1;
        this.errorsCount = 0;
        this.full = false;
    }
}
