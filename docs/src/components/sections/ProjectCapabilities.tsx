const ProjectCapabilities = () => {
  return (
    <section
      aria-labelledby="Project Capabilities"
      className="w-full flex flex-col gap-10 [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:ml-4"
    >
      <h2 className="section-tag"> • Project Capabilities </h2>

      <div>
        <h3 className="tag"> Key Features </h3>

        <ul>
          <li>Converts positive integers into Roman numerals</li>
          <li>
            Supports numbers above <em>3999</em> using overline notation
          </li>
          <li>Minimal footprint, fully written in TypeScript</li>
          <li>Designed for both learning and production use</li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectCapabilities;
