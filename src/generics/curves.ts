import inputs from "./inputs";

export default {
  SeqTransparency: {
    name: "Transparency",
    short: "Controls the Transparency property.",
    inputs: [
      inputs.NormStart,
      inputs.NormEnd,
      inputs.Envelope,
      inputs.Smoothness,
    ],
  },

  SeqSize: {
    name: "Size",
    short: "Controls the Size property.",
    inputs: [
      inputs.PosStart,
      inputs.PosEnd,
      inputs.Envelope,
      inputs.Smoothness,
    ],
  },

  SeqSquash: {
    name: "Squash",
    short: "Controls the Squash property.",
    inputs: [inputs.Start, inputs.End, inputs.Envelope, inputs.Smoothness],
  },

  Speed: {
    name: "Speed",
    short: "Controls the speed of the effect.",
    long: "Controls the speed of the effect. If it becomes negative, all of the animations start going backwards.",
    inputs: [inputs.Duration, inputs.Start, inputs.End],
  },

  ShockSize: {
    name: "Size",
    short: "Controls the easing of all Size animations.",
    inputs: [inputs.Duration],
  },

  ShockTransparency: {
    name: "Transparency",
    short:
      "Controls the easing of the Transparency animation at the end of the effect's lifetime.",
    inputs: [inputs.PosStart, inputs.PosEnd],
  },
};
