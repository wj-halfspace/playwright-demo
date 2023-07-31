// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chromium } from "@playwright/test";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Person[];
};

type Person = {
  name: string;
  title: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.halfspace.ai/team");

  const people: Person[] = [];
  const divElements = await page.$$eval("div.grid > div > div > div", (divs) =>
    divs.map((div) => div.textContent)
  );

  for (let i = 0; i < divElements.length; i += 4) {
    const name = divElements[i + 1];
    const title = divElements[i + 2];
    const description = divElements[i + 3];
    if (!name || name === "") continue;
    if (!title || title === "") continue;
    if (!description || description === "") continue;
    people.push({
      name,
      title,
      description,
    });
  }

  await browser.close();
  res.status(200).json({ data: people });
}
