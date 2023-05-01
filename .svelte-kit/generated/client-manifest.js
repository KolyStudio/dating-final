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
	"postback": [7],
	"exeke/[id]": [4],
	"invitation/[id]": [5],
	"invitations/[id]": [6],
	"s/[id]": [8],
	"test/[id]": [9],
	"[id]": [3]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};