import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.post({
    relativePath: "hello-world.md",
  });
  return (
    <div className="p-16 bg-black text-white">
      <h2 className="text-xl font-bold">Below is tina markdown content:</h2>
      <br />
      <TinaMarkdown content={result.data.post.content} />
      <br />
      <br />

      <h2 className="text-xl font-bold">
        Below is normal table (equivalent to what&apos;s in the markdown)
      </h2>
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Tables</strong>
            </td>
            <td>
              <strong>Are</strong>
            </td>
            <td>
              <strong>Cool</strong>
            </td>
          </tr>
          <tr>
            <td>col 3 is</td>
            <td>right-aligned</td>
            <td>$1600</td>
          </tr>
          <tr>
            <td>col 2 is</td>
            <td>centered</td>
            <td>$12</td>
          </tr>
          <tr>
            <td>zebra stripes</td>
            <td>are neat</td>
            <td>$1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
