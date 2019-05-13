<script>
  export let amount;
  export let unit;

  import dictionary from './dictionary';
  import {locale} from './locale';

  function pluralize(num, key, locale) {
    let pluralRules = new Intl.PluralRules(locale, {
      // Polish uses ordinal numbers here...???
      type: locale.startsWith('pl') ? 'ordinal' : 'cardinal'
    });
    let numberRules = new Intl.NumberFormat(locale, {
      style: 'decimal',
      useGrouping: true
    });

    let plural = pluralRules.select(num);
    let number = numberRules.format(num);
    let text = dictionary[locale][key][plural];
    return `${number} ${text}`;
  }
</script>


<span class="duration duration-{unit}">{pluralize(amount, unit, $locale)}</span>
