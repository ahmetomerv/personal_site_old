import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import {IProject} from './interfaces/project.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	projects: IProject[];

	constructor(private githubService: GithubService) {}
	ngOnInit(): void {
		this.githubService.getUserRepositories().subscribe(res => this.projects = res);
	}
}
