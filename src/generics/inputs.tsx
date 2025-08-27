export default {
  NormStart: {
    name: "Start",
    desc: "The starting value of the curve.",
    range: [0, 1],
  },

  NormEnd: {
    name: "End",
    desc: "The ending value of the curve.",
    range: [0, 1],
  },

  PosStart: {
    name: "Start",
    desc: "The starting value of the curve.",
    range: [0, "inf"],
  },

  PosEnd: {
    name: "End",
    desc: "The ending value of the curve.",
    range: [0, "inf"],
  },

  Start: {
    name: "Start",
    desc: "The starting value of the curve.",
    range: ["-inf", "inf"],
  },

  End: {
    name: "End",
    desc: "The ending value of the curve.",
    range: ["-inf", "inf"],
  },

  Duration: {
    name: "Duration",
    desc: "The amount of seconds it takes to reach the End value.",
    range: [0, "inf"],
  },

  Envelope: {
    name: "Envelope",
    desc: "The value of envelope on each point in the converted NumberSequence.",
    range: [0, "inf"],
  },

  Smoothness: {
    name: "Smoothness",
    desc: "The value that decides the amount of points on the curve, calculated using the [Newton Raphson method](https://en.wikipedia.org/wiki/Newton's_method).",
    range: [0, 1],
  },
};
