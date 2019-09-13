import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { IProject } from '../../interfaces/project.interface';

// const CSS_COLOR_NAMES = ['white', '#E1E5EE', '#031927', 'black', 'grey'];
const CSS_COLOR_NAMES: string[] = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];

@Component({
	selector: 'app-project-item',
	templateUrl: './project-item.component.html',
	styleUrls: ['./project-item.component.scss'],
	animations: [
		trigger(
		  'fadeIn', [
			 	transition(
					':enter', [
				  		style({ opacity: '0' }),
						animate('250ms', style({ opacity: '1' }))
					]
			 	),
			 	transition(
					':leave', [
						style({ 'opacity': '1' }),
						animate('250ms', style({ opacity: '0' }))
					]
			   )
		   ]
		)
	]
})

export class ProjectItemComponent implements AfterViewInit {
	@Input()
	project: IProject;

	@ViewChild('projectItemArtCanvas')
	projectItemArtCanvas: HTMLCanvasElement;

	canvasContext: CanvasRenderingContext2D;
	randomNumber: number = this.generateRandomNumber();
	randomNumber2: number = this.generateRandomNumber();

	constructor() {}

	ngAfterViewInit(): void {
		if (this.randomNumber === this.randomNumber2) {
			this.randomNumber = this.generateRandomNumber();
		}
		this.canvasContext = this.projectItemArtCanvas['nativeElement'].getContext('2d');
		this.drawGradient(CSS_COLOR_NAMES[this.randomNumber], CSS_COLOR_NAMES[this.randomNumber2]);
		this.canvasContext.fillRect(0, 0, 300, 150);
	}

	drawGradient(color0, color2): void {
		const fillColor = this.canvasContext.createLinearGradient(0, 0, 300, 150);
		fillColor.addColorStop(0, color0);
		fillColor.addColorStop(1, color2);
		this.canvasContext.fillStyle = fillColor;
	}

	generateRandomNumber(): number {
		return Math.floor(Math.random() * CSS_COLOR_NAMES.length);
	}
}
