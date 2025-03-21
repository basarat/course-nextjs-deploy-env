export default function Page() {
  const STAGE = process.env.STAGE;

  switch (STAGE) {
    case "production":
      return "You are running a production version";
    case "preview":
      return "You are looking at a preview of the website";
    case "developement":
      return "Development mode enabled";
    default:
      return "Are you sure you provided a valid STAGE?";
  }
}
