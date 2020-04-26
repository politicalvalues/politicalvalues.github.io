/**
 * Welcome to the Options file
 * Everything should be pretty self-explanatory.
 * If not, please consult our wiki
 * https://github.com/politicalvalues/politicalvalues.github.io
 */

var main_axes =
[
    "x",
    "national",
    "authoritarian",
    "progressive",
    "rev",
    "central",
    "production",
    "cultural",
    "state",
    "religion",
    "race",
];

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
    }
}