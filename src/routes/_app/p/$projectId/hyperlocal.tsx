import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Markdown } from "@/client/components/Markdown";
import { PageHeader } from "@/client/components/PageHeader";
import { Button } from "@/client/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/ui/card";
import guide from "@/client/features/hyperlocal/hyperlocal-guide.md?raw";
import { downloadFile } from "@/client/lib/download";

export const Route = createFileRoute("/_app/p/$projectId/hyperlocal")({
  component: HyperlocalPage,
});

const [introduction, ...sectionContent] = guide.split(/(?=^## \d+\.)/m);
const sections = sectionContent.map((content, index) => ({
  id: `hyperlocal-section-${index + 1}`,
  title: content.split("\n", 1)[0].replace(/^## /, ""),
  content,
}));

function HyperlocalPage() {
  return (
    <div
      lang="sl"
      className="h-full overflow-auto px-4 py-4 pb-24 md:px-6 md:py-6 md:pb-8"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <PageHeader
          title="Hyperlocal"
          description="Navodila za SEO prijazne lokalne vodiče za različne aplikacije, s primerom za Yummy Bites."
          actions={
            <Button
              variant="outline"
              onClick={() =>
                downloadFile(
                  guide,
                  "HYPERLOCAL-SEO-HANDOFF.md",
                  "text/markdown",
                )
              }
            >
              <Download aria-hidden />
              Prenesi .md
            </Button>
          }
        />

        <Card>
          <CardHeader>
            <CardTitle>
              <h2>SEO prijazne hyperlocal strani za aplikacije</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Markdown>{introduction.replace(/^# .+\n+/, "")}</Markdown>
            <p className="text-muted-foreground">
              Začnite z vhodnim briefom in pilotom. Nato preverite lokalne vire,
              SEO, CTA in objavljivi paket. Navodila so skupna vsem projektom;
              podatke in vsebino pripravite za izbrano aplikacijo.
            </p>
            <nav aria-label="Vsebina hyperlocal navodil">
              <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-primary underline-offset-4 hover:underline focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-6"
                aria-label={section.title}
              >
                <Markdown>{section.content}</Markdown>
              </section>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
