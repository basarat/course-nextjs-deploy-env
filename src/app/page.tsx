export default function Page() {
  const STAGE = process.env.STAGE;

  switch (STAGE) {
    case "production":
      return "We are in production 🚀";
    case "preview":
      return "You are looking at a preview of the website 🫰🏻";
    case "development":
      return "Development mode enabled 🔥";
    default:
      return "Are you sure you provided a valid STAGE? 😢";
  }
}
