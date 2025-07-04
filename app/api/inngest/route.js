export async function GET(req) {
  const { serve } = await import("inngest/next");
  const { inngest } = await import("@/lib/inngest/client");
  const { generateIndustryInsights } = await import("@/lib/inngest/function");

  const { GET } = serve({
    client: inngest,
    functions: [generateIndustryInsights],
  });

  return GET(req);
}

export async function POST(req) {
  const { serve } = await import("inngest/next");
  const { inngest } = await import("@/lib/inngest/client");
  const { generateIndustryInsights } = await import("@/lib/inngest/function");

  const { POST } = serve({
    client: inngest,
    functions: [generateIndustryInsights],
  });

  return POST(req);
}
