const component = data => `<container>

${data.text || ""}

</container>`

export default {
    id: "container",
    label: "Kontener",
    fields: [
      {
        name: 'text',
        label: 'Zawartość',
        widget: 'markdown'
      }
    ],
    pattern: /^<container>\s*([\s\S]*?)\s*<\/container>$/m,
    fromBlock: function(match) {
      return {
        text: match[1],
      };
    },
    toBlock: function(data) {
      return component(data);
    },
    toPreview: function(data) {
      return component(data);
    }
}