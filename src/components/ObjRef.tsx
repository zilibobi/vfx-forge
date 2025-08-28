import { compileText } from "../server_utils";

const ObjRef = ({ attributes, curves }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Summary</h2>
      <h3 className="text-xl pt-2 font-bold">Attributes</h3>
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
        {attributes.map((attr, index) => (
          <div className="py-4" key={index}>
            <a
              className="text-violet-600 dark:text-violet-400"
              href={"#Attribute:" + attr.name}
            >
              {attr.name}
            </a>{" "}
            : {attr.type}
            {compileText(attr.short)}
          </div>
        ))}
      </div>
      {curves.length > 0 && (
        <>
          <h3 className="text-xl font-bold">Curves</h3>
          <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
            {curves.map((curve, index) => (
              <div className="py-4" key={index}>
                <a
                  className="text-violet-600 dark:text-violet-400"
                  href={"#Curve:" + curve.name}
                >
                  {curve.name}
                </a>
                {compileText(curve.short)}
              </div>
            ))}
          </div>
        </>
      )}
      {attributes.length > 0 && (
        <>
          <h2 className="text-2xl font-bold">Attributes</h2>
          <div className="flex flex-col">
            {attributes.map((attr, index) => (
              <div className="py-4" key={index}>
                <div className="flex gap-4 items-center justify-between">
                  <h3
                    className="text-xl font-bold"
                    id={"Attribute:" + attr.name}
                  >
                    {attr.name}
                  </h3>
                  <code className="px-2 py-0.25 rounded-lg bg-neutral-200/40 dark:bg-neutral-800">
                    {attr.type}
                  </code>
                </div>
                {compileText(attr.long || attr.short)}
              </div>
            ))}
          </div>
        </>
      )}
      {curves.length > 0 && (
        <>
          <h2 className="text-2xl font-bold">Curves</h2>
          <div className="flex flex-col gap-4">
            {curves.map((curve, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold" id={"Curve:" + curve.name}>
                  {curve.name}
                </h3>
                {compileText(curve.long || curve.short)}
                {curve.inputs.length > 0 && (
                  <h3 className="text-xl font-bold my-2">Inputs</h3>
                )}
                <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 rounded-lg">
                  {curve.inputs.map((input, index) => (
                    <div className="py-4" key={index}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold">{input.name}</h3>
                        <code className="px-2 py-0.25 rounded-lg bg-neutral-200 dark:bg-neutral-800">
                          [{input.range[0]}; {input.range[1]}]
                        </code>
                      </div>
                      {compileText(input.desc)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ObjRef;
