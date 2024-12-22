"use client";
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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

interface LanguageData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

const GitHubStats: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [languageData, setLanguageData] = useState<LanguageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }

        const { repos, userStats } = await response.json();

        setRepos(repos);
        setUserStats(userStats);

        const languageCount: Record<string, number> = {};
        repos.forEach((repo: Repo) => {
          if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
          }
        });

        setLanguageData({
          labels: Object.keys(languageCount),
          datasets: [
            {
              label: 'Languages',
              data: Object.values(languageCount),
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
              ],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    const interval = setInterval(fetchStats, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading GitHub stats...</p>;
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        GitHub Statistics
      </h2>
      {userStats && (
        <div className="mb-6">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Followers: <span className="font-semibold text-teal-500">{userStats.followers}</span>
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Public Repositories: <span className="font-semibold text-teal-500">{userStats.public_repos}</span>
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Stars Received: <span className="font-semibold text-teal-500">{userStats.stars}</span>
          </p>
        </div>
      )}
      <h3 className="text-xl font-bold text-blue-500 dark:text-blue-300 mb-4">Language Breakdown</h3>
      {languageData && (
        <div className="w-full max-w-md mx-auto">
          <Pie data={languageData} />
        </div>
      )}
      <h3 className="text-xl font-bold text-blue-500 dark:text-blue-300 mb-4 mt-8">Latest Repositories</h3>
      <ul className="space-y-4">
        {repos.slice(0, 5).map((repo) => (
          <li key={repo.name} className="border-b pb-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-teal-500 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {repo.description || 'No description available'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubStats;
