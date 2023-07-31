// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chromium } from "@playwright/test";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.halfspace.ai/");
  const title = await page.title();
  await browser.close();
  res.status(200).json({ data: title });
}
