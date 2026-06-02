// Credit: https://codepen.io/Hyperplexed/pen/rNrJgrd
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @param {HTMLElement} element - the element to apply the effect to
 * @param {Object} options - configuration options
 * @param {string} options.letters - custom letters to use for scrambling (default: A-Z)
 * @param {number} options.speed - speed of the scramble effect (default: 30ms)
 * @param {number} options.iterationStep - how fast the text resolves (default: 1/3)
 */
export function createTextScramble(element, options = {}) {
    const {
        letters: customLetters = letters,
        speed = 30,
        iterationStep = 1/3
    } = options;

    let interval = null;

    const scramble = (event) => {
        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }
                
                    return customLetters[Math.floor(Math.random() * customLetters.length)];
                })
                .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += iterationStep;
        }, speed);
    };

    element.dataset.value = element.innerText;
    
    element.addEventListener("mouseover", scramble);

    return () => {
        element.removeEventListener("mouseover", scramble);
        clearInterval(interval);
    };
}

/**
 * @param {HTMLElement} element - the element to apply the effect to
 * @param {Object} options - configuration options
 * @param {string} options.letters - custom letters to use for scrambling (default: A-Z)
 * @param {number} options.speed - speed of the scramble effect (default: 30ms)
 * @param {number} options.iterationStep - how fast the text resolves (default: 1/3)
 * @param {number} options.initialDelay - delay before initial scramble starts (default: 1000ms)
 */
export function createInitialTextScramble(element, options = {}) {
    const {
        initialDelay = 1000,
        ...scrambleOptions
    } = options;

    element.dataset.value = element.innerText;
    
    setTimeout(() => {
        const event = { target: element };
        createTextScramble(element, scrambleOptions).scramble(event);
    }, initialDelay);

    return createTextScramble(element, scrambleOptions);
} 