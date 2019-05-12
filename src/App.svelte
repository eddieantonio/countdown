<script>
  const future = new Date('2019-05-29T14:00:00-0600');
  let now = new Date();
  let timedelta = future - now;

  let leftover = timedelta;
  let days = ~~(leftover / (24 * 60 * 60 * 1000));
  leftover = ~~(leftover % (24 * 60 * 60 * 1000));

  let hours = ~~(leftover / (60 * 60 * 1000));
  leftover = ~~(leftover % (60 * 60 * 1000));

  let minutes = ~~(leftover / (60 * 1000));
  leftover = ~~(leftover % (60 * 1000));

  let seconds = ~~(leftover / 1000);
</script>


<main>
  <ul>
    <li> {days} days
    <li> {hours} hours
    <li> {minutes} minutes
    <li> {seconds} seconds
  </ul>
</main>
<!-- vim: ft=html ts=2 sw=2: -->
