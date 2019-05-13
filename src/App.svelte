<script>
  const future = new Date('2019-05-29T14:00:00-0600');
  const locale = 'en-CA';

  import Duration from './Duration.svelte';

  let now = new Date();
  let timedelta, days, hours, minutes, seconds;

  $: {
    timedelta = future - now;
    let leftover = timedelta;
    days = ~~(leftover / (24 * 60 * 60 * 1000));
    leftover = ~~(leftover % (24 * 60 * 60 * 1000));

    hours = ~~(leftover / (60 * 60 * 1000));
    leftover = ~~(leftover % (60 * 60 * 1000));

    minutes = ~~(leftover / (60 * 1000));
    leftover = ~~(leftover % (60 * 1000));

    seconds = ~~(leftover / 1000);
  }

  setInterval(function () {
    now = new Date();
  }, 10);
</script>


<main>
  <p> There's only
    <span class="big-display">
      <Duration amount={days} unit="day" {locale} />,
      <Duration amount={hours} unit="hour" {locale} />,
      <Duration amount={minutes} unit="minute" {locale} />, and
      <Duration amount={seconds} unit="second" {locale} />
    </span>
      left.
  </p>
</main>
<!-- vim: ft=html ts=2 sw=2: -->
