"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = __importDefault(require("./Cell"));
const Vector2D_1 = __importDefault(require("./Vector2D"));
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const cells = [];
cells.push(new Cell_1.default(new Vector2D_1.default(250, 250), 20, new Vector2D_1.default(3, 2)));
cells.push(new Cell_1.default(new Vector2D_1.default(150, 150), 10, new Vector2D_1.default(-3, 6)));
cells.push(new Cell_1.default(new Vector2D_1.default(150, 350), 30, new Vector2D_1.default(4, -5)));
setInterval(() => {
    ctx.clearRect(0, 0, 600, 600);
    cells.forEach((c) => c.update());
    fillPixels();
}, 1000 / 20);
canvas.addEventListener("mousedown", (e) => {
    cells.forEach((c, i) => {
        if (c.getDist(e.clientX, e.clientY) < c.radius) {
            const newCells = c.split();
            cells.push(newCells[0]);
            cells.push(newCells[1]);
            cells.splice(i, 1);
        }
    });
});
const fillPixels = () => {
    for (let y = 0; y < 600; y += 4) {
        for (let x = 0; x < 600; x += 4) {
            let hue = 0;
            let smallestDist = Number.MAX_VALUE;
            let smallestRadius = Number.MAX_VALUE;
            cells.forEach((c) => {
                const d = c.getDist(x, y);
                if (d < smallestDist) {
                    smallestDist = d;
                    smallestRadius = c.radius;
                }
            });
            hue = smallestDist < smallestRadius ? 255 : 100 - smallestDist;
            ctx.fillStyle = `rgb(${hue}, ${hue}, ${hue})`;
            ctx.fillRect(x, y, 4, 4);
        }
    }
};
//# sourceMappingURL=main.js.map