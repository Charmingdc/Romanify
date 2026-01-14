import {
  ProjectIdentity,
  ProjectSummary,
  ProjectCapabilities,
  UsageOverview,
  DesignDecisions,
  ContributionFooter
} from "@/components";

const App = () => {
  return (
    <article className="w-[99%] flex flex-col gap-[8rem] p-6">
      <header>
        <ProjectIdentity />
      </header>

      <main className="w-full flex flex-col gap-[5rem]">
        <ProjectSummary />
        <ProjectCapabilities />
        <UsageOverview />
        <DesignDecisions />
      </main>

      <footer className="w-full -mt-[3rem]">
        <ContributionFooter />
      </footer>
    </article>
  );
};

export default App;
