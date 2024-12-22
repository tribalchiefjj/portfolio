import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com';
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

interface UserStats {
  followers: number;
  public_repos: number;
  stars: number;
}

export async function GET() {
  if (!ACCESS_TOKEN) {
    console.error("Access token is missing!");
    return NextResponse.json({ error: "GitHub Access Token is missing" }, { status: 500 });
  }

  console.log("Access token present, attempting fetch...");
  console.log("Access Token (masked):", `${ACCESS_TOKEN.slice(0, 5)}...`);

  try {
    const [reposResponse, userResponse] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/tribalchiefjj/repos?per_page=100`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
      fetch(`${GITHUB_API_URL}/users/tribalchiefjj`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
    ]);

    console.log("Repos response status:", reposResponse.status, reposResponse.statusText);
    console.log("User response status:", userResponse.status, userResponse.statusText);

    if (!reposResponse.ok || !userResponse.ok) {
      const errorDetails = {
        reposError: await reposResponse.text(),
        userError: await userResponse.text(),
      };
      console.error("Error details:", errorDetails);
      return NextResponse.json(
        { error: "Failed to fetch data from GitHub", details: errorDetails },
        { status: reposResponse.status || userResponse.status }
      );
    }

    const reposData: Repo[] = await reposResponse.json();
    const userData: UserStats = await userResponse.json();

    const stars = reposData.reduce((acc: number, repo: Repo) => acc + (repo.stargazers_count || 0), 0);

    return NextResponse.json({
      repos: reposData,
      userStats: {
        followers: userData.followers,
        public_repos: userData.public_repos,
        stars,
      },
    });
  } catch (error) {
    console.error("Unhandled error while fetching GitHub data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data", details: (error as Error).message },
      { status: 500 }
    );
  }
}
