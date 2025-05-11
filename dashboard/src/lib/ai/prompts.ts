export function buildPRPrompt(title: string, diff: string): string {
  return `Please review the following PR titled "${title}" and provide a summary and improvement suggestions:

${diff}`;
}

export function buildChangelogPrompt(commits: string[]): string {
  return `Generate a changelog from these commit messages:

${commits.join("\n")}`;
}
