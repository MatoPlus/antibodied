import { Request, Response } from "express";
import axios from "axios";

export const getPosts = async (req: Request, res: Response) => {
  axios
    .get(process.env.GOOGLE_STORAGE_URL + req.params.id + ".json")
    .then(async (response) => {
      const positiveDocuments: any[] = [];
      const negativeDocuments: any[] = [];

      for (const post of response.data.posts) {
        if (post.isPositive) {
          positiveDocuments.push(post);
        } else {
          negativeDocuments.push(post);
        }
      }

      return res.json({
        goodPosts: positiveDocuments,
        badPosts: negativeDocuments,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ posts: [] });
    });
};
