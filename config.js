// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Dan',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'It is late,',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '7b9b631b68110ee5737b807c37633934', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '47.373360',
	defaultLongitude: '8.515070',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'MyStudies',
					link: 'https://www.lehrbetrieb.ethz.ch/myStudies/',
				},
				{
					name: 'Moodle',
					link: 'https://moodle-app2.let.ethz.ch',
				},
				{
					name: 'EduApp',
					link: 'https://eduapp-app1.ethz.ch/',
				},
				{
					name: 'Video',
					link: 'https://video.ethz.ch',
				},
			],
		},
		{
			icon: 'globe-2',
			id: '2',
			links: [
				{
					name: 'Maps',
					link: 'https://maps.google.com',
				},
				{
					name: 'Calendar',
					link: 'https://calendar.google.com',
				},
				{
					name: 'Photos',
					link: 'https://photos.google.com',
				},
				{
					name: 'Fonts',
					link: 'https://fonts.google.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'play-circle',
			id: '1',
			links: [
				{
					name: 'YouTube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Netflix',
					link: 'https://www.netflix.com',
				},
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.com',
				},
			],
		},
		{
			icon: 'wrench',
			id: '2',
			links: [
				{
					name: 'Translate',
					link: 'https://translate.google.com',
				},
				{
					name: 'Dominant Colours',
					link: 'https://www.imgonline.com.ua/eng/get-dominant-colors.php',
				},
				{
					name: 'Field Play',
					link: 'https://anvaka.github.io/fieldplay/',
				},
				{
					name: 'OneDrive',
					link: 'https://ethz-my.sharepoint.com/personal/dlewinsky_ethz_ch/_layouts/15/onedrive.aspx',
				},
			],
		},
	],
};
