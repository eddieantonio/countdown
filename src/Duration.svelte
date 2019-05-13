<script>
  export let amount;
  export let unit;
  export let locale;

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
  };

  let asNum = (function(inst) {
    return inst.format.bind(inst);
  }(new Intl.NumberFormat(locale, {
    style: 'decimal',
    useGrouping: true
  })));

  let pluralRules = new Intl.PluralRules(locale, { type: 'cardinal' });
  function pluralize(num, key) {
    let plural = pluralRules.select(num);
    let text = dictionary[locale][key][plural];
    return `${asNum(num)} ${text}`;
  }
</script>


<span class="duration duration-{unit}">{pluralize(amount, unit)}</span>
