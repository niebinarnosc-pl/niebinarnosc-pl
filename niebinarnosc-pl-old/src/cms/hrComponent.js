export default {
    id: "hr",
    label: "Linia Pozioma",
    fields: [],
    pattern: /^<hr\/>$/m,
    fromBlock: function(match) {
      return {};
    },
    toBlock: function(data) {
      return "<hr/>";
    },
    toPreview: function(data) {
      return "<hr/>";
    }
}