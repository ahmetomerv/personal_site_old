import { IProject } from '../interfaces/project.interface';

const reposToList: string[] = [
	'tassel_notes',
	'youtube_clone_client',
	'text_to_speech',
	'git_finder',
	'compleet_labs_client',
	'video_snapper',
	'image_filterer',
	'imdb_scrapper_client',
	'spacex_launch_stats',
];

export const githubRepoMapper = (response: any[]): IProject[] => response.map(repo => {
	return {
		repoName: repo.name,
		repoUrl: repo.html_url,
		repoHostedUrl: repo.homepage,
		description: repo.description
	};
}).filter(item => reposToList.includes(item.repoName));
