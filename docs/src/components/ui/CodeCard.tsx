import { useEffect, useState } from "react";
import { CopyBlock, github, irBlack } from "react-code-blocks";

interface CodeCardProps {
  language?: string;
  code: string;
}

const CodeCard: React.FC<CodeCardProps> = ({
  language = "typescript",
  code
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div className="w-full font-thin text-[0.8rem] font-mono max-w-2xl my-2 !ml-0">
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={false}
        theme={isDarkMode ? irBlack : github}
      />
    </div>
  );
};

export default CodeCard;
