class GuessingGame {
    constructor() {
        this._min = null;
        this._max = null;
        this.num_arr = [];
    }

    setRange(min, max) {
        for(var i = min; i <= max; i++)
            this.num_arr.push(i);
        this._min = 1;
        this._max = this.num_arr.length - 2;
    }

    guess() {
        this.bin_num = Math.round((this._min + this._max) / 2);
        return this.num_arr[this.bin_num];
    }

    lower() {
        this._max = this.bin_num - 1;
    }

    greater() {
        this._min = this.bin_num + 1;
    }
}

module.exports = GuessingGame;
