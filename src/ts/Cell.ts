import Vector2D from "./Vector2D";

export default class Cell {
  position: Vector2D;
  radius: number;
  direction: Vector2D;
  constructor(position: Vector2D, radius: number, direction: Vector2D) {
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
    const cellA = new Cell(
      this.position.clone(),
      this.radius * 0.75,
      new Vector2D(Math.random() * 10 - 5, Math.random() * 10 - 5)
    );
    const cellB = new Cell(
      this.position.clone(),
      this.radius * 0.75,
      new Vector2D(Math.random() * 10 - 5, Math.random() * 10 - 5)
    );
    return [cellA, cellB];
  }

  getDist(x: number, y: number) {
    const deltaX = Math.abs(x) - Math.abs(this.position.x);
    const deltaY = Math.abs(y) - Math.abs(this.position.y);
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }

  show(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
