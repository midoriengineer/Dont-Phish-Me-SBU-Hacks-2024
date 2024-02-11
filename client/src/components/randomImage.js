function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../assets/profileImages', false, /\.(jpg)$/));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledImages = shuffleArray([...images]);

let currentIndex = 0;

export function getNextImage() {
    if (currentIndex >= shuffledImages.length) {
        currentIndex = 0;
        shuffleArray(shuffledImages);
    }
    const image = shuffledImages[currentIndex];
    currentIndex++;
    return image;
}
