const DesignDecisions = () => {
  return (
    <section
      aria-labelledby="Design Decisions"
      className="w-full flex flex-col gap-10 [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:ml-4"
    >
      <h2 className="section-tag"> • Design Decisions (DD) </h2>

      <div>
        <h3 className="tag"> Behavior & Constraints </h3>

        <ul>
          <li> Throws an error for zero or negative values </li>
          <li> Optimized for readability over cleverness </li>
          <li> Avoids unnecessary abstractions </li>
          <li> Easy to audit, easy to trust </li>
        </ul>
      </div>
    </section>
  );
};

export default DesignDecisions;
