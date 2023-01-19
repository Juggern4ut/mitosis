"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __importDefault(require("./Vector2D"));
class Cell {
    constructor(position, radius, direction) {
        this.position = position;
        this.radius = radius;
        this.direction = direction;
    }
    update() {
        if (this.position.x < this.radius || this.position.x > 600 - this.radius) {
            this.direction.x *= -1;
        }
        if (this.position.y < this.radius || this.position.y > 600 - this.radius) {
            this.direction.y *= -1;
        }
        this.position.add(this.direction);
    }
    split() {
        const cellA = new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5));
        const cellB = new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5));
        return [cellA, cellB];
    }
    getDist(x, y) {
        const deltaX = Math.abs(x) - Math.abs(this.position.x);
        const deltaY = Math.abs(y) - Math.abs(this.position.y);
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
    show(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map