/*
Backend Tasks:
One of the core features of MeetYourClass is our ability to take a user's uploaded
information and use it to post to different social media platforms. We need you to
design a system that will allow us to post to Instagram and TikTok. The system should
be easily extensible to add more social media platforms in the future.

The process for uploading a user's information is as follows:
1. A user uploads their information to our system (not part of this interface, just for context).
2. This route is called with a POST request to request the information be posted to a
social media platform. Each platform requires the same user data, but may have different
configuration needs (e.g., API keys, account IDs, etc.).
3. Once the information is posted, the user's information is updated in our system.
4. Finally, the user is notified that their information has been posted.

Requirements:
- Each social media platform should have its own implementation for handling the upload.
- The system should allow for platform-specific configurations to be easily added in the future.
- The solution should follow a design where platform logic is swappable and testable in isolation.
  - Consider using an interface or abstract class to define common behaviors for platforms, which can then be injected where needed. This allows new platforms to be added without modifying the core logic.
- Each step should be mockable and independently testable. For instance, we may want to change how we notify users of successful posts, so it should be easy to swap the notification mechanism (e.g., email, SMS).
- You don't need to implement the system, just focus on designing it in a way that allows for easy extension and testing.

*/
type User = {};
async function getUserData(userId: string): Promise<User> {
  // Fetch user data from the database
  return {};
}

export async function POST(req: Request) {
  const { type, userId } = (await req.json()) as {
    type: "instagram" | "tiktok";
    userId: string;
  };

  return Response.json({ success: true });
}
