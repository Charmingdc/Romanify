import { romanize } from "@charmingdc/romanify";

interface FooterLinks {
  link: string;
  label: string;
  linkText: string;
}

const footerLinks: FooterLinks[] = [
  {
    link: "https://github.com/Charmingdc/Romanify",
    label: "Github",
    linkText: "Charmingdc/Romanify"
  },
  {
    link: "https://x.com",
    label: "Twitter",
    linkText: "@Charmingdc01"
  },
  {
    link: "mailto:charmingdc002@gmail.com",
    label: "Email",
    linkText: "charmingdc002@gmail.com"
  }
];

const ContributionFooter = () => {
  return (
    <section
      aria-labelledby="Contribution & Contact"
      className="w-full flex flex-col gap-10 [&_div]:flex [&_div]:flex-col
      [&_div]:gap-2 [&_div]:ml-4"
    >
      <h2 className="section-tag"> • Contribution & Contact </h2>

      <div>
        <h3 className="tag"> Get Involved </h3>

        <ul>
          {footerLinks.map(footerLink => (
            <li>
              {footerLink.label}:
              <a
                key={footerLink.link}
                href={footerLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9rem] underline underline-offset-4 decoration-border transition-all duration-200 active:decoration-accent hover:decoration:accent"
              >
                {""} {footerLink.linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="-mt-4">
        Contributions, issues, and improvements are welcome.
      </p>

      <p className="self-center text-muted mt-4">
        {romanize(new Date().getFullYear())} Romanify.
      </p>
    </section>
  );
};

export default ContributionFooter;
