import Code from './Code';

class Morse {

    constructor() {
        this.morse = Code;
    }

    word(word) {
        return word.toUpperCase().split('').map(v => {
            return this.morse[v];
        }).join(' ');
    }

    convert(value) {
        return value.split(' ').map(w => this.word(w)).join(' / ');      
    }
}

export default Morse;
