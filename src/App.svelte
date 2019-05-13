<script>
  const future = new Date('2019-05-29T14:00:00-0600');

  import Duration from './Duration.svelte';
  import {TimeDelta} from './TimeDelta';

  // Constantly recalculate the time.
  let now = new Date();
  let tMinus;
  $: tMinus = new TimeDelta(future - now);
  setInterval(() => { now = new Date() }, 10);

  // The locale can be changed.
  let locale = 'en-CA';
  function changeLocale(newLocale) {
    locale = newLocale;
  }
</script>


<main>
  <p> There's only
    <span class="big-display">
      <Duration amount={tMinus.days} unit="day" {locale} />,
      <Duration amount={tMinus.hours} unit="hour" {locale} />,
      <Duration amount={tMinus.minutes} unit="minute" {locale} />, and
      <Duration amount={tMinus.seconds} unit="second" {locale} />
    </span>
      left.
  </p>
</main>

<footer>
  <ul class="language-picker">
    <button on:click={() => changeLocale('en-CA')}>🇨🇦</button><!-- might upset Québec -->
    <button on:click={() => changeLocale('es-GT')}>🇬🇹 </button>
    <button on:click={() => changeLocale('pl-PL')}>🇵🇱 </button>
  </ul>
</footer>
