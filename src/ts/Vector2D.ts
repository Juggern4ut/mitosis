export default class Vector2D {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector2D) {
    this.x += other.x;
    this.y += other.y;
  }

  dotProduct(other: Vector2D) {
    return this.x * other.x + this.y * other.y;
  }

  clone() {
    return new Vector2D(this.x, this.y);
  }

  multiply(n: number) {
    this.x = this.x * n;
    this.y = this.y * n;
  }
}
