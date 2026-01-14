interface SocialLink {
  link: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  { link: "https://github.com/Charmingdc", text: "Github" },
  { link: "mailto:charmingdc002@gmail.com", text: "Mail" },
  { link: "https://x.com/Charmingdc01", text: "Twitter" }
];

const ProjectIdentity = () => {
  return (
    <section
      aria-label="Project Identity"
      className="w-full flex flex-col gap-10 pt-4 -mb-6"
    >
      <h1 className="text-3xl font-black"> @charmingdc/romanify </h1>

      <aside className="flex flex-col gap-3 mt-[2rem]">
        <h2 className="tag">Social Links</h2>

        <div className="flex items-center flex-wrap gap-2">
          {socialLinks.map((socialLink, idx) => (
            <a
              key={socialLink.link}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent text-base"
            >
              {socialLink.text}
              {idx !== socialLinks.length - 1 && (
                <span className="text-foreground"> • </span>
              )}
            </a>
          ))}
        </div>
      </aside>

      <div className="flex items-center flex-wrap gap-3">
        <h2 className="tag"> Tagline </h2>

        <p className="text-muted italic pb-1 border-b-[4px] border-border">
          I felt bored so I re-invented the wheel but better (allegedly).
        </p>
      </div>
    </section>
  );
};

export default ProjectIdentity;
