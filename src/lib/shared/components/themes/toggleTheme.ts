const title = 'theme';
const themeColor = {
	dark: 'dark',
	light: 'light'
};

export const toggleTheme = (theme: any, $theme: any) => {
	if ($theme.mode === themeColor.light) {
		theme.set({ ...$theme, mode: themeColor.dark });

		console.log(theme);
		updateDocument(title, themeColor.dark, themeColor.light);
	} else {
		theme.set({ ...$theme, mode: themeColor.light });
		updateDocument(title, themeColor.light, themeColor.dark);
	}
};

const updateDocument = (name: string, tclass: string, other: string) => {
	document.cookie = `${name}=${tclass};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
	(document.getElementById(title) as HTMLElement).classList.remove(other);
	document.documentElement.classList.remove(other);
	(document.getElementById(title) as HTMLElement).classList.add(tclass);
	document.documentElement.classList.add(tclass);
};
