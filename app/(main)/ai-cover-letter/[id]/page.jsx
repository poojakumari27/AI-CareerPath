import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";
import { notFound } from "next/navigation";

export default async function EditCoverLetterPage({ params }) {
  const { id } = params;

  const coverLetter = await getCoverLetter(id);

  if (!coverLetter) {
    return notFound(); // show 404 if not found
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold gradient-title mb-6">
          {coverLetter.jobTitle || "Job Title"} at {coverLetter.companyName || "Company"}
        </h1>
      </div>

      <CoverLetterPreview content={coverLetter.content || "No content available."} />
    </div>
  );
}
