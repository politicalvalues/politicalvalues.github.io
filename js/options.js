/**
 * Welcome to the Options file
 * Everything should be pretty self-explanatory.
 * If not, please consult our wiki
 * https://github.com/politicalvalues/politicalvalues.github.io
 */

var axes =
    [
        {
            "key": "x",
            "titles":
                {
                    "negative": "Liberal",
                    "positive": "Conservative",
                },
            "colors":
                {
                    "negative": "blue",
                    "positive": "red",
                },
        },
        {
            "key": "national",
            "titles":
                {
                    "negative": "Internationalist",
                    "positive": "Nationalist",
                },
            "colors":
                {
                    "negative": "#88ba8d",
                    "positive": "#88b8ba",
                },
        },
        {
            "key": "authoritarian",
            "titles":
                {
                    "negative": "Libertarian",
                    "positive": "Authoritarian",
                },
            "colors":
                {
                    "negative": "#ffeb3b",
                    "positive": "#3f51b5",
                },
        },
        {
            "key": "progressive",
            "titles":
                {
                    "negative": "Progressive",
                    "positive": "Traditional",
                },
            "colors":
                {
                    "negative": "#888dba",
                    "positive": "#a988ba",
                },
        },
        {
            "key": "rev",
            "titles":
                {
                    "negative": "Revolutionary",
                    "positive": "Reformist",
                },
            "colors":
                {
                    "negative": "#c95560",
                    "positive": "#55b0c9",
                },
        },
        {
            "key": "central",
            "titles":
                {
                    "negative": "Centralized",
                    "positive": "Decentralized",
                },
            "colors":
                {
                    "negative": "#55c987",
                    "positive": "#7ec955",
                },
        },
        {
            "key": "production",
            "titles":
                {
                    "negative": "Production",
                    "positive": "Nature",
                },
            "colors":
                {
                    "negative": "#752112",
                    "positive": "#34db16",
                },
        },
        {
            "key": "cultural",
            "titles":
                {
                    "negative": "Cultural",
                    "positive": "Scientific",
                },
            "colors":
                {
                    "negative": "#16dbc4",
                    "positive": "#1662db",
                },
        },
        {
            "key": "state",
            "titles":
                {
                    "negative": "Communal",
                    "positive": "Market",
                },
            "colors":
                {
                    "negative": "#9063e6",
                    "positive": "#3a1d73",
                },
        },
        {
            "key": "religion",
            "titles":
                {
                    "negative": "Religious",
                    "positive": "Scientific",
                },
            "colors":
                {
                    "negative": "#6a1d73",
                    "positive": "#d117c8",
                },
        },
        {
            "key": "race",
            "titles":
                {
                    "negative": "Identity",
                    "positive": "Equality",
                },
            "colors":
                {
                    "negative": "#17d1a3",
                    "positive": "#94e0ce",
                },
        },
    ]

var buttons =
    {
        "strongly_agree":
            {
                "modifier": 1.3,
                "color": "#0f8500",
                "text": "Strongly Agree",
                "order": 1,
            },
        "agree":
            {
                "modifier": 1,
                "color": "#09b500",
                "text": "Agree",
                "order": 2,
            },
        "somewhat_agree":
            {
                "modifier": 0.5,
                "color": "#88ff75",
                "text": "Somewhat Agree",
                "order": 3,
            },
        "neutral":
            {
                "modifier": 0,
                "color": "#d9d9d9",
                "text": "Neutral",
                "order": 4,
            },
        "somewhat_disagree":
            {
                "modifier": -0.5,
                "color": "#ff7575",
                "text": "Somewhat Disagree",
                "order": 5,
            },
        "disagree":
            {
                "modifier": -1,
                "color": "#ff0000",
                "text": "Disagree",
                "order": 6,
            },
        "strongly_disagree":
            {
                "modifier": -1.3,
                "color": "#910000",
                "text": "Strongly Disagree",
                "order": 7,
            },
        "back":
            {
                "function": "back",
                "color": "gray",
                "text": "Go Back",
                "order": 8,
            },
    }