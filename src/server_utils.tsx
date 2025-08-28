import { MDXRemote } from "nextra/mdx-remote";
import { compileMdx } from "nextra/compile";

export async function compileText(text: string) {
  const rawJs = await compileMdx(text, {});

  return (
    <div className="[&>p:first-child]:mt-0 [&>p:first-child]:pt-0">
      <MDXRemote compiledSource={rawJs} />
    </div>
  );
}
