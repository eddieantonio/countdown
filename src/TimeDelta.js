export class TimeDelta {
  constructor(timedelta) {
    let leftover = timedelta;
    this.days = ~~(leftover / (24 * 60 * 60 * 1000));
    leftover = ~~(leftover % (24 * 60 * 60 * 1000));

    this.hours = ~~(leftover / (60 * 60 * 1000));
    leftover = ~~(leftover % (60 * 60 * 1000));

    this.minutes = ~~(leftover / (60 * 1000));
    leftover = ~~(leftover % (60 * 1000));

    this.seconds = ~~(leftover / 1000);
  }
}
