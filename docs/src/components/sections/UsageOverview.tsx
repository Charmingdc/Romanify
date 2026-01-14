import { CodeCard } from "@/components";

const UsageOverview = () => {
  const verifyNode = `
   node -v
  `;

  const installationCode = `
   npm install @charmingdc/romanify
  `;

  const usageCode = `
   // generateFullDate.ts
  
   import { romanize } from "@charmingdc/romanify";

   const generateFullDate = (): string => romanize(new Date().getFullYear());
   
`;

  return (
    <section
      aria-labelledby="Usage Overview"
      className="w-full flex flex-col gap-10 [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:ml-4"
    >
      <h2 className="section-tag"> • Usage Overview </h2>

      <div aria-labelledby="Prerequisites">
        <h3 className="tag"> 1. Prerequisites </h3>

        <p>
          Before you start, make sure you have <span>Node.js</span> installed.
          You can download it from{" "}
          <a href="https://nodejs.org/" target="_blank" className="font-bold">
            nodejs.org
          </a>
          .
        </p>

        <CodeCard language="shell" code={verifyNode} />
      </div>

      <div aria-labelledby="Installation">
        <h3 className="tag"> 2. Installation </h3>

        <p>Install Romanify in your project using npm or yarn:</p>

        <CodeCard language="shell" code={installationCode} />
      </div>

      <div aria-labelledby="Usage">
        <h3 className="tag"> 3. Usage </h3>

        <p>
          Import the <strong>romanize</strong> function from
          <strong> @charmingdc/romanify</strong> and call it wherever you need a
          Roman numeral:
        </p>

        <CodeCard language="ts" code={usageCode} />
      </div>

      <div aria-labelledby="Tips">
        <h3 className="tag"> 4. Tips & Notes </h3>

        <ul>
          <li> Romanify only accepts positive integers. </li>
          <li>
            Numbers larger than 3999 are represented using overline notation.
          </li>
          <li>
            Keep your usage simple, import the function wherever needed without
            extra boilerplate.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UsageOverview;
