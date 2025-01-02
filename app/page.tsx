import Hello from "@/app/components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER/CLIENT?");

  return (
      <>
      <h1 className="text-3xl">Hello World!</h1>
        <Hello />
      </>
  );
}