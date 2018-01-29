/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language:
		"en",
	timeFormat: 24,
	units:
		"metric",

	modules: [
		{
			module:
				"alert",
			config: {
				effect:
					"slide",
				alert_effect:
					"slide",
				welcome_message:
					"Boot complete!",
				display_time: 1.5,
			},
		},
		{
			module:
				"clock",
			position:
				"top_left",
			config: {
				timezone:
					"Europe/Amsterdam",
			},
		},
		{
			module:
				"calendar",
			header:
				"Calendar",
			position:
				"top_left",
			config: {
				calendars: [
					{
						symbol:
							"calendar-check-o ",
						url:
							process
								.env
								.CALENDAR,
					},
				],
				timeFormat:
					"absolute",
				urgency: 30,
			},
		},
		/*{
			module: 'compliments',
			position: 'lower_third'
		},*/
		{
			module:
				"currentweather",
			position:
				"top_right",
			config: {
				location:
					process
						.env
						.WEATHER_LOCATION,
				appid:
					process
						.env
						.WEATHER_ID,
				iconTable: {
					"01d":
						"sunny-day",
					"02d":
						"mostly-sunny-day",
					"03d":
						"cloudy-day",
					"04d":
						"mostly-cloudy-day",
					"09d":
						"rainy-day",
					"10d":
						"rainy-day",
					"11d":
						"thunderstorm-day",
					"13d":
						"snowy-day",
					"50d":
						"foggy-day",

					"01n":
						"clear-night",
					"02n":
						"mostly-clear-night",
					"03n":
						"cloudy-night",
					"04n":
						"mostly-cloudy-night",
					"09n":
						"showers-night",
					"10n":
						"rain-night",
					"11n":
						"thunderstorm-night",
					"13n":
						"snowy-night",
					"50n":
						"foggy-night",
				},
			},
		},
		{
			module:
				"weatherforecast",
			position:
				"top_right",
			header:
				"Weather Forecast",
			config: {
				location:
					process
						.env
						.WEATHER_LOCATION,
				appid:
					process
						.env
						.WEATHER_ID,
				iconTable: {
					"01d":
						"sunny-day",
					"02d":
						"mostly-sunny-day",
					"03d":
						"cloudy-day",
					"04d":
						"mostly-cloudy-day",
					"09d":
						"rainy-day",
					"10d":
						"rainy-day",
					"11d":
						"thunderstorm-day",
					"13d":
						"snowy-day",
					"50d":
						"foggy-day",

					"01n":
						"clear-night",
					"02n":
						"mostly-clear-night",
					"03n":
						"cloudy-night",
					"04n":
						"mostly-cloudy-night",
					"09n":
						"showers-night",
					"10n":
						"rain-night",
					"11n":
						"thunderstorm-night",
					"13n":
						"snowy-night",
					"50n":
						"foggy-night",
				},
			},
		},
		{
			module:
				"newsfeed",
			position:
				"bottom_bar",
			config: {
				feeds: [
					{
						title:
							"Android News",
						url:
							"http://feeds.feedburner.com/AndroidPolice?format=xml",
					},
					{
						title:
							"NOS",
						url:
							"http://feeds.nos.nl/nosnieuwsbinnenland.rss",
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
			},
		},
	],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
