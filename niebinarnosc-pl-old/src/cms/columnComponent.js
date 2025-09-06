const component = data => `<columns reverse="${data.reverse || ""}">
<div>

${data.firstColumn || ""}

</div>
<div>

${data.secondColumn || ""}

</div>
</columns>`

export default {
    id: "column-split",
    label: "Podział kolumnowy",
    fields: [
      {
        name: 'reverse',
        label: 'Odwrócić na desktopie?',
        widget: 'boolean',
        hint: 'W przypadku np. obrazków, które na telefonach powinny być na górze (pierwsza kolumna), ale na desktopie powinny być z prawej strony'
      },
      {
        name: 'firstColumn',
        label: 'Pierwsza Kolumna',
        widget: 'markdown'
      },
      {
        name: 'secondColumn',
        label: 'Druga Kolumna',
        widget: 'markdown'
      }
    ],
    pattern: /^<columns reverse="(.*?)">\s*?<div>\s*([\s\S]*?)\s*<\/div>\s*<div>\s*([\s\S]*?)\s*<\/div>\s*<\/columns>$/m,
    fromBlock: function(match) {
      return {
        reverse: match[1],
        firstColumn: match[2],
        secondColumn: match[3]
      };
    },
    toBlock: function(data) {
      return component(data);
    },
    toPreview: function(data) {
      return component(data);
    }
}