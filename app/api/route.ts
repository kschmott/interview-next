/*
Backend Tasks:
One of the core features of MeetYourClass is our ability to take a user's uploaded
information and use it to post to different social media platforms. We need you to
design a system that will allow us to post to Instagram and TikTok. The system should
should be easily extensible to add more social media platforms in the future.

The process for uploading a user's information is as follows:
1. A user uploads their information to our system
2. This route is called with a POST request to request the information be posted to a
social media platform
3. Once the information is posted, the user's information is updated in our system
4. Finally, the user is notified that their information has been posted

Each of these steps should be easily testable and should be able to be run in isolation, ie 
they should be able to be mocked. Each step should also be able to be easily swapped out for a
different implementation. For example, we may want to change the way we notify via email OR text 
to the user that their information has been posted.

Please design a system that meets these requirements, the actual implementation of the system
is not required, just the design.
*/

export async function POST(req: Request) {
  const { type, userId } = (await req.json()) as {
    type: "instagram" | "tiktok";
    userId: string;
  };

  return Response.json({ success: true });
}
