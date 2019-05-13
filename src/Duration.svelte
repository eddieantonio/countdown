<script>
  export let amount;
  export let unit;

  import dictionary from './dictionary';
  import {locale as localeStore} from './locale';

  let locale;
  localeStore.subscribe(value => {
    locale = value;
  });

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
