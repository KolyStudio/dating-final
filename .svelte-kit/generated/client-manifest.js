export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"postback": [6],
	"exeke/[id]": [3],
	"invitation/[id]": [4],
	"invitations/[id]": [5],
	"s/[id]": [7],
	"s copy/[id]": [8],
	"test/[id]": [9]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};