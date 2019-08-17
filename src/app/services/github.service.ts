import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { githubRepoMapper } from '../mappers/github-repo.mapper';

const reposToList: any[] = [
	'tassel_notes',
	'text_to_speech',
	'git_finder',
	'compleet_labs_client',
	'video_snapper',
	'image_filterer',
	'imdb_scrapper_client'
];

@Injectable()
export class GithubService {
	clientId = 'e396a7ee2bb34bff9db1';
	clientSecret = '8a5708afd3ed1f3eb85f9c8e01effc948d3a64dd';
	reposCount = 100;

	constructor(private httpClient: HttpClient) {}

	public getUserRepositories(user: string = 'ahmetomerv'): Observable<any> {
		return this.httpClient.get<any>(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
			.pipe(
				map(githubRepoMapper)
			);
	}
}
