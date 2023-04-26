export class TourModel {
	_id: string;
	image: string;
	title: string;
	description: string;
	accessibility: {
		[key: string]: string;
	};
	calcRating: number;
	categories: string[];
	tags: string[];
}
