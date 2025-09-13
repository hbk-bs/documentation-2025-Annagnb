document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM is loaded");
});

document.addEventListener("mousemove", function(e) {
    for (let i = 0; i < 3; i++) { // mehrere Sparkles pro Bewegung
        const sparkle = document.createElement("div");
        const types = ["", "gold", "pink", "blue", "white"];
        let type = types[Math.floor(Math.random() * types.length)];
        sparkle.className = "sparkle " + type;
        // Zufällige Größe und Rotation
        sparkle.style.setProperty('--sparkle-scale', (0.5 + Math.random() * 1.2).toFixed(2));
        sparkle.style.setProperty('--sparkle-rot', Math.floor(Math.random() * 360) + "deg");
        // Zufällige Position um die Maus
        const offsetX = (Math.random() - 0.5) * 16;
        const offsetY = (Math.random() - 0.5) * 16;
        sparkle.style.left = (e.pageX + offsetX) + "px";
        sparkle.style.top = (e.pageY + offsetY) + "px";
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 900);
    }
});
