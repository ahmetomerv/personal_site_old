import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { githubRepoMapper } from '../mappers/github-repo.mapper';
import { environment } from '../../environments/environment';

@Injectable()
export class GithubService {
	clientId = environment.githubAPI.clientId;
	clientSecret = environment.githubAPI.clientSecret;
	reposCount = 100;

	constructor(private httpClient: HttpClient) {}

	public getUserRepositories(user: string = 'ahmetomerv'): Observable<any> {
		return this.httpClient.get<any>(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
			.pipe(
				map(githubRepoMapper)
			);
	}
}
