document.addEventListener("DOMContentLoaded", function () {
    const spaceView = document.getElementById("space-view");

    // Generate stars
    const numberOfStars = 500;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        // Add the "yellow" class to 50% of the stars
        if (Math.random() < 0.5) {
            star.classList.add("yellow");
        }
        
        setRandomPosition(star);
        setRandomAnimationDelay(star);
        spaceView.appendChild(star);
    }
});

function setRandomPosition(element) {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
}

function setRandomAnimationDelay(element) {
    const randomDelay = Math.random() * 5; // Adjust the value for the delay range
    element.style.animationDelay = `-${randomDelay}s`;
}
