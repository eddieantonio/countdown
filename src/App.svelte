<script>
  const future = new Date('2019-05-29T14:00:00-0600');
  const locale = 'pl-PL';

  let asNum = (function(inst) {
    return inst.format.bind(inst);
  }(new Intl.NumberFormat(locale, {
    style: 'decimal',
    useGrouping: true
  })));

  const dictionary = {
    'en-CA': {
      'day': {one: 'day', other: 'days'},
      'hour': {one: 'hour', other: 'hours'},
      'minute': {one: 'minute', other: 'minutes'},
      'second': {one: 'second', other: 'seconds'},
    },
    'es-GT': {
      'day': {one: 'dia', other: 'dias'},
      'hour': {one: 'hora', other: 'horas'},
      'minute': {one: 'minuto', other: 'minutos'},
      'second': {one: 'segundo', other: 'segundos'},
    },
    'pl-PL': {
      'day': {one: 'dziń', few: 'dni', many: 'dni', other: 'dni'},
      'hour': {one: 'godzina', few: 'godziny', many: 'godzin', other: 'godzin'},
      'minute': {one: 'minuta', few: 'minuty', many: 'minut', other: 'minut'},
      'second': {one: 'secunda', few: 'secundy', many: 'secund', other: 'secund'},
    },
  }

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

  let pluralRules = new Intl.PluralRules(locale, { type: 'cardinal' });
  function pluralize(num, key) {
    let plural = pluralRules.select(num);
    let text = dictionary[locale][key][plural];
    return `${asNum(num)} ${text}`;
  }
</script>


<main>
  <ul>
    <li> {pluralize(days, 'day')}
    <li> {pluralize(hours, 'hour')}
    <li> {pluralize(minutes, 'minute')}
    <li> {pluralize(seconds, 'second')}
  </ul>
</main>
<!-- vim: ft=html ts=2 sw=2: -->
