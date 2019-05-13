<script>
  import Duration from './Duration.svelte';
  import {TimeDelta} from './TimeDelta';
  import {locale} from './locale';

  const future = new Date('2019-05-29T14:00:00-0600');

  // Constantly recalculate the time.
  let now = new Date();
  let tMinus;
  $: tMinus = new TimeDelta(future - now);
  setInterval(() => { now = new Date() }, 10);

  function changeLocale(event) {
    locale.set(event.target.value);
  }
</script>


<main>
  <p> There's only
    <span class="big-display">
      <Duration amount={tMinus.days} unit="day" />,
      <Duration amount={tMinus.hours} unit="hour" />,
      <Duration amount={tMinus.minutes} unit="minute"/>, and
      <Duration amount={tMinus.seconds} unit="second" />
    </span>
      left.
  </p>
</main>

<footer>
  <ul class="language-picker">
    <button value='en-CA' on:click={changeLocale}>🇨🇦</button><!-- might upset Québec -->
    <button value='es-GT' on:click={changeLocale}>🇬🇹</button>
    <button value='pl-PL' on:click={changeLocale}>🇵🇱 </button>
  </ul>
</footer>
