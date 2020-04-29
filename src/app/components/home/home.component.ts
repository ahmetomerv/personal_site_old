import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';
import { GithubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	personalProjects: IProject[];
	workProjects: IProject[] = [
		{
			name: 'İndeks - Aksigorta',
			description: 'Documents indexing application',
			path: '/project/indeks'
		},
		{
			name: 'SAT - Aksigorta',
			description: 'Insurance management application',
			path: '/project/sat'
		},
		{
			name: 'Dijital Depo - Türk Telekom',
			description: 'Online file storage service',
			path: '/project/dijitaldepo'
		},
		{
			name: 'Marketplace - Türk Telekom',
			description: 'Software & services market',
			path: '/project/marketplace'
		},
		{
			name: 'Barclaycard Web - Barclaycard',
			description: 'Internet & mobile banking',
			path: '/project/barclaycard'
		}
	];

	constructor(private githubService: GithubService) {}

	ngOnInit(): void {
		this.githubService.getUserRepositories().subscribe(res => this.personalProjects = res);
	}

}
