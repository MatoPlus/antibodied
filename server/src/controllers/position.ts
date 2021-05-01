import { Request, Response } from "express";
import axios from "axios";
import language from "@google-cloud/language";
import { resolvePtr } from "node:dns";

export const getPosts = async (req: Request, res: Response) => {
  const client = new language.LanguageServiceClient();

  axios
    .get(process.env.GOOGLE_STORAGE_URL + req.params.id + ".json")
    .then(async (response) => {
      const documents: any[] = [];

      for (const post of response.data.posts) {
        const document = {
          content: post.content as string,
          type: "PLAIN_TEXT",
        };

        // Detects the sentiment of the text
        const [result] = await client.analyzeSentiment({
          document: document as any,
        });
        const sentiment = result.documentSentiment;

        documents.push({
          user: post.user,
          content: post.content,
          isPositive: sentiment?.score && sentiment.score >= 0 ? true : false,
        });
      }

      return res.json({ posts: documents });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ posts: [] });
    });
};
