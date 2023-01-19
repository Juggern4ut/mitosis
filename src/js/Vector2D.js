"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    dotProduct(other) {
        return this.x * other.x + this.y * other.y;
    }
    clone() {
        return new Vector2D(this.x, this.y);
    }
    multiply(n) {
        this.x = this.x * n;
        this.y = this.y * n;
    }
}
exports.default = Vector2D;
//# sourceMappingURL=Vector2D.js.map