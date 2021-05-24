//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const list_position = (a, b) => b - a;

export class HighScores {
  constructor(points) {
    this.points = points;
  }

  get scores() {
    return this.points; 
  }

  get latest() {
    return this.points[this.points.length - 1];
  }

  get personalBest() {
    return Math.max(...this.points);
  }

  get personalTopThree() {
    return [...this.scores].sort(list_position).slice(0, 3);
  }
}


