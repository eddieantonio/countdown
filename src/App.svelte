<script>
  const future = new Date('2019-05-29T14:00:00-0600');
  const locale = 'en-CA';

  import Duration from './Duration.svelte';
  import {TimeDelta} from './TimeDelta';

  let now = new Date();
  let t;

  $: t = new TimeDelta(future - now);
  setInterval(function () {
    now = new Date();
  }, 10);
</script>


<main>
  <p> There's only
    <span class="big-display">
      <Duration amount={t.days} unit="day" {locale} />,
      <Duration amount={t.hours} unit="hour" {locale} />,
      <Duration amount={t.minutes} unit="minute" {locale} />, and
      <Duration amount={t.seconds} unit="second" {locale} />
    </span>
      left.
  </p>
</main>
