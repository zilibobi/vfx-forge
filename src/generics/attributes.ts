export default {
  EmitCount: {
    name: "EmitCount",
    type: "number",
    short: "The amount of times a particle or an effect is emitted.",
  },

  EmitDelay: {
    name: "EmitDelay",
    type: "number",
    short: "The amount of seconds waited before the effect is emitted.",
  },

  EmitDuration: {
    name: "EmitDuration",
    type: "number",
    short: "The amount of seconds the effect is delayed by.",
  },

  EffectDuration: {
    name: "EffectDuration",
    type: "NumberRange",
    short: "The minimum and maximum duration of the effect.",
  },

  SyncPosition: {
    name: "SyncPosition",
    type: "boolean",
    short: "Decides whether the effect follows its origin after being emitted.",
    long: `
    Decides whether the effect follows its origin after being emitted.

    - Meshes follow their ancestor attachment, or the CFrame of the Start part.
    If it's the former, the rotation of the Start part is still synced (required for making spinning meshes).

    - Beziers act similar to ParticleEmitters. They simply follow the CFrame of their part or attachment parent.

    - Spin Models find their first attachment or part ancestor and follow its CFrame.

    - Shockwave Lines follow the CFrame of their origin attachment. SyncPosition Lines are useful for creating non-straight paths.
    `,
  },

  Enabled: {
    name: "Enabled",
    type: "boolean",
    short: "When true, emits a set amount of times per second.",
    long: `
      When true, emits the effect a set amount of times per second.
      A special tag is required for this attribute to work. You can add it in the 'Behavior' section.
    `,
  },

  Rate: {
    name: "Rate",
    type: "number",
    short:
      "Determines how many times per second an effect is emitted when Enabled.",
  },

  MinSize: {
    name: "MinSize",
    type: "Vector3",
    short: "The minimum size of a part.",
  },

  MaxSize: {
    name: "MaxSize",
    type: "Vector3",
    short: "The maximum size of a part.",
  },

  SizeScaleStart: {
    name: "SizeScaleStart",
    type: "Vector3",
    short:
      "The scale factor applied to a part's inital random size from which it animates to have exactly 1 scale on all axes.",
  },

  SizeScaleEnd: {
    name: "SizeScaleEnd",
    type: "Vector3",
    short:
      "The scale factor applied to a parts's size in an animation at the end of its lifetime.",
  },
};
