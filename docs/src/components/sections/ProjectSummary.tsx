const ProjectSummary = () => {
  return (
    <section
      aria-labelledby="Project Summary"
      className="w-full flex flex-col gap-10 [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:ml-4"
    >
      <h2 className="section-tag"> • Project Summary </h2>

      <div>
        <h3 className="tag"> Overview </h3>

        <p>
          Romanify is a lightweight npm package for converting numbers into
          Roman numerals. It also supports large values using overline notation.
          Built for clarity, accuracy, and simplicity.
        </p>
      </div>
    </section>
  );
};

export default ProjectSummary;
