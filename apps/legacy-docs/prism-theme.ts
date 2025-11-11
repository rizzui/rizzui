const theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#1e293b",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#626b84",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted", "attr-value"],
      style: {
        color: "#e2d775",
      },
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: [
        "builtin",
        "char",
        "constant",
        "function",
        "variable",
        "property-access",
        "class-name",
        "tag",
      ],
      style: {
        color: "#38bdf8",
      },
    },
    {
      types: ["punctuation", "selector", "attr-name"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#db2777",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: ["keyword", "plain", "rule"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "#f2f2f8",
      },
    },
    {
      types: ["property"],
      style: {
        color: "#7dd3fc",
      },
    },
  ],
};

export default theme;
