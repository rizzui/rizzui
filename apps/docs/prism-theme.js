"use strict";

var theme = {
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
      types: ["string", "inserted", "attr-name"],
      style: {
        color: "#e2d775",
      },
    },
    {
      types: ["number", "boolean", "attr-value"],
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
      ],
      style: {
        color: "#38bdf8",
      },
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["class-name", "deleted", "tag"],
      style: {
        color: "#e06c75",
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
        color: "#c678dd",
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

module.exports = theme;
