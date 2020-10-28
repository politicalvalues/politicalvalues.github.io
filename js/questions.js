/**
 * Welcome to the Questions file!
 * You can modify, delete, create, etc, your own questions here.
 * The rest of this quiz's script will automagically take place of your questions for you.
 * For more help, please consult our GitHub wiki
 * https://github.com/politicalvalues/politicalvalues.github.io
 */

var questions =
    [
        {
            "question": "Abortion should always be illegal.",
            "description": "No matter what the situation is, no abortions should be allowed to occur, whatsoever.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 5,
                    "progressive": 3,
                    "rev": 3,
                    "central": 5,
                    "production": 0,
                    "cultural": 5,
                    "state": 0,
                    "religion": 7,
                    "race": 0,
                }
        },
        {
            "question": "Abortion should sometimes be illegal.",
            "description": "Late-stage abortions should be illegal, as well as abortions caused out of inconsideration for consequences of the action.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 5,
                    "rev": 3,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Abortion should be allowed, no matter what.",
            "description": "Regardless of the situation, abortion should always be entirely legal.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": -2,
                    "race": 0,
                }
        },
        {
            "question": "I will always support my country.",
            "description": "Even if my country does things which are undoubtedly morally wrong, I will still stand behind my country and support it entirely.",
            "effect":
                {
                    "x": 6,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Openness about sex has gone too far.",
            "description": "Conversations about sex should be reduced or entirely halted. It's important that conversations about sex are kept private between adults.",
            "effect":
                {
                    "x": 3,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "People are divided more by class than by race.",
            "description": "People are generally much less divided by their race than the social class that they're in.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "My nation is better than other nations.",
            "description": "The country that I currently reside in is superior to any and all other nations.",
            "effect":
                {
                    "x": 5,
                    "national": 5,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 3,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 3,
                }
        },
        {
            "question": "I'm proud of what my nation is.",
            "description": "I agree with what my nation represents now and has done in the past. I support my nation wholeheartedly.",
            "effect":
                {
                    "x": 5,
                    "national": 5,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "My nation doesn't need to change.",
            "description": "I think that the current state of my nation is satisfactory, and there's no need to implement dramatic changes.",
            "effect":
                {
                    "x": 0,
                    "national": 5,
                    "authoritarian": 0,
                    "progressive": 6,
                    "rev": 7,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Change should be implemented very slowly, or not at all.",
            "description": "It's important that the whole nation is not overturned suddenly and any changes are implemented gradually.",
            "effect":
                {
                    "x": 3,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 6,
                    "rev": 10,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "The current economic system benefits the nation as a whole.",
            "description": "My nation's economic system benefits the nation as a whole, including everybody within it, including all three classic social classes.",
            "effect":
                {
                    "x": 5,
                    "national": 3,
                    "authoritarian": 0,
                    "progressive": 7,
                    "rev": 3,
                    "central": 0,
                    "production": -2,
                    "cultural": 0,
                    "state": 5,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "It's foolish to be proud of a nation.",
            "description": "Because nobody can choose the nation which they're born into, it's foolish to be proud of it.",
            "effect":
                {
                    "x": -5,
                    "national": -4,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": -1,
                    "central": 0,
                    "production": 0,
                    "cultural": 3,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Corporations are a threat to liberty.",
            "description": "Large-scale corporations very existence is a threat to individual liberties.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -5,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "The very existence of a government is a threat to liberty.",
            "description": "Simply via a government existing, liberties are unfairly compromised.",
            "effect":
                {
                    "x": 0,
                    "national": -4,
                    "authoritarian": -10,
                    "progressive": 0,
                    "rev": -2,
                    "central": 4,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "The government, as is, should have even more power.",
            "description": "More power should be given to the government to regulate the nation.",
            "effect":
                {
                    "x": 0,
                    "national": 1,
                    "authoritarian": 6,
                    "progressive": 3,
                    "rev": 5,
                    "central": -9,
                    "production": -2,
                    "cultural": 1,
                    "state": 5,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Those who can work and refuse to work should be punished.",
            "description": "Anybody who has the ability to work and refuses to work shouldn't benefit from any social programs.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": 1,
                    "rev": 0,
                    "central": -1,
                    "production": -1,
                    "cultural": 0,
                    "state": 3,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Effort should be made to stop inheritable diseases.",
            "description": "Those who have a serious inheritable disease should be barred from being allowed to reproduce, thus spreading their illness further.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 5,
                    "progressive": 2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -1,
                    "state": 0,
                    "religion": -1,
                    "race": -1,
                }
        },
        {
            "question": "Government economic intervention is needed.",
            "description": "The government should intervene in the economy to protect consumers from price gouging, scams, monopolies, and more.",
            "effect":
                {
                    "x": -5,
                    "national": -2,
                    "authoritarian": 2,
                    "progressive": -4,
                    "rev": 2,
                    "central": -2,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "''The more free the market, the more free the people.''",
            "description": "The government should have minimal intervention in the economy to allow for more freedom.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -8,
                    "progressive": 0,
                    "rev": 0,
                    "central": 2,
                    "production": 0,
                    "cultural": 0,
                    "state": 4,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I agree with the following quote.",
            "description": "Under no pretext should arms and ammunition be surrendered; any attempts to disarm the people must be stopped, by force if necessary",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -6,
                    "progressive": -8,
                    "rev": -5,
                    "central": 2,
                    "production": 0,
                    "cultural": 0,
                    "state": 2,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "<b>Strong</b> gun control is needed in today's world.",
            "description": "Background checks, waiting periods, etc.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 3,
                    "progressive": -2,
                    "rev": 2,
                    "central": -2,
                    "production": 0,
                    "cultural": 2,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Execution should be legal for serious crimes.",
            "description": "Those who are reasonably convicted of serious crimes, such as homicide or rape, should be executed.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 3,
                    "progressive": 3,
                    "rev": 2,
                    "central": 0,
                    "production": 0,
                    "cultural": -1,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "My nation requires a large military.",
            "description": "It's absolutely essential for my nation to have a very large military.",
            "effect":
                {
                    "x": 5,
                    "national": 3,
                    "authoritarian": 1,
                    "progressive": 1,
                    "rev": 1,
                    "central": 3,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Healthcare is a universal human right.",
            "description": "Everybody should be afforded <b>free</b> & quality healthcare.",
            "effect":
                {
                    "x": -10,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": -5,
                    "rev": -1,
                    "central": 1,
                    "production": 2,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Those who <i>can</i> pay should pay, and those who can't shouldn't.",
            "description": "For the same good or service, those with excess money should be required to pay, but those without any money should recieve it for free.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -4,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Those who can pay deserve better goods.",
            "description": "Someone who can pay $5,000 yearly for medical treatment should have a higher standard of medical treatment than someone who can only afford to pay $3,000.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 3,
                    "rev": 0,
                    "central": -2,
                    "production": -1,
                    "cultural": 0,
                    "state": -2,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Publically-funded research is a waste of time.",
            "description": "Research should be reserved for a free market - things which must be researched out of need will be researched in time.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": -1,
                    "progressive": 1,
                    "rev": 1,
                    "central": -3,
                    "production": -1,
                    "cultural": 0,
                    "state": 5,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Socialism is a good idea.",
            "description": "A political and economic theory of social organization which advocates that the means of production, distribution, and exchange should be owned or regulated by the community as a whole.",
            "effect":
                {
                    "x": -5,
                    "national": -3,
                    "authoritarian": 0,
                    "progressive": -5,
                    "rev": -8,
                    "central": -1,
                    "production": 0,
                    "cultural": 0,
                    "state": -6,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Capitalism is a good idea.",
            "description": "An economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state.",
            "effect":
                {
                    "x": 5,
                    "national": 3,
                    "authoritarian": -2,
                    "progressive": -5,
                    "rev": 5,
                    "central": 3,
                    "production": -5,
                    "cultural": 0,
                    "state": 6,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Communism is a good idea.",
            "description": "A political theory derived from Karl Marx, advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs.",
            "effect":
                {
                    "x": -10,
                    "national": -5,
                    "authoritarian": 0,
                    "progressive": -10,
                    "rev": -15,
                    "central": 3,
                    "production": 3,
                    "cultural": 1,
                    "state": -9,
                    "religion": 1,
                    "race": 5,
                }
        },
        {
            "question": "I agree with the following quote.",
            "description": "From each according to his ability, to each according to his needs.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": -5,
                    "progressive": -5,
                    "rev": -5,
                    "central": 4,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Those who disagree with me are uneducated.",
            "description": "Anyone who holds drastically different political beliefs from me is simply uneducated, and, after recieving education, will realize I'm right.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 4,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -4,
                    "state": 2,
                    "religion": -2,
                    "race": -1,
                }
        },
        {
            "question": "Partisian politics are a good thing.",
            "description": "A two party system like the one in America or a six party system like the one in Canada are beneficial to the nation.",
            "effect":
                {
                    "x": 0,
                    "national": 2,
                    "authoritarian": 0,
                    "progressive": 8,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "A single-party system is desirable.",
            "description": "There should only be one political party.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 10,
                    "progressive": 5,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Traditions have no value.",
            "description": "Things our ancestors did have no value, aside from being 'traditional,' and there's no point in keeping it alive.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -10,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 10,
                    "state": 0,
                    "religion": 10,
                    "race": 0,
                }
        },
        {
            "question": "Capitalism will eventually be looked at like feudalism.",
            "description": "Capitalism will eventually be seen as a terrible system which only served a historical purpose to provide automation.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -5,
                    "rev": -10,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Religious people are uneducated.",
            "description": "Those who believe in a higher power are not educated.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 7,
                    "race": 0,
                }
        },
        {
            "question": "State-church seperation is a good idea.",
            "description": "Politics and religion should not mix.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -3,
                    "rev": 0,
                    "central": 2,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 6,
                    "race": 0,
                }
        },
        {
            "question": "Religious values should be instilled upon people.",
            "description": "My children should learn about my religion and practice my religion from a young age.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 8,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": -12,
                    "race": 0,
                }
        },
        {
            "question": "Religion has no place in the modern world.",
            "description": "Religion is not needed and only serves to create un-needed conflict.",
            "effect":
                {
                    "x": -3,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 12,
                    "race": 0,
                }
        },
        {
            "question": "Facts over feelings.",
            "description": "Emotional arguments should not have the same weight which factual ones do.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 2,
                    "state": 0,
                    "religion": 2,
                    "race": 0,
                }
        },
        {
            "question": "Emotion has no place in politics.",
            "description": "No emotional arguments should be made. Anything and everything should be firmly rooted in logic and reasoning, verifiable by science.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -3,
                    "rev": 2,
                    "central": 0,
                    "production": 0,
                    "cultural": 3,
                    "state": 0,
                    "religion": 4,
                    "race": 0,
                }
        },
        {
            "question": "The scientific method is antiquidated.",
            "description": "The scientific method no longer accurately represents science and should be phased out.",
            "effect":
                {
                    "x": 3,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": 6,
                    "rev": 3,
                    "central": -2,
                    "production": 0,
                    "cultural": 4,
                    "state": 0,
                    "religion": 4,
                    "race": 0,
                }
        },
        {
            "question": "People over the age of 70 should not be allowed to vote.",
            "description": "Anybody who is over the age of 70 should be barred from contributing to politics. Their opinions are based on an entirely different generation and are no longer relevant.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 5,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Anybody under the age of 30 should not be allowed to vote.",
            "description": "People under the age of 30 should not be allowed to vote. They're too young to have a valid opinion as they haven't learned enough about the world.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 5,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Billionaires should not exist.",
            "description": "At no point should anybody, for any reason, every have money in excess of $1,000,000,000.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": -4,
                    "progressive": -6,
                    "rev": -2,
                    "central": 3,
                    "production": 0,
                    "cultural": 1,
                    "state": -2,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Tariffs on international trade are a good thing.",
            "description": "Tariffs encourage local production and are a good thing for the economy of my nation.",
            "effect":
                {
                    "x": 3,
                    "national": 5,
                    "authoritarian": 0,
                    "progressive": 2,
                    "rev": 2,
                    "central": -1,
                    "production": -3,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": -1,
                }
        },
        {
            "question": "Inheritence is not a legitamate form of wealth.",
            "description": "Inherited money should be taken by the government, as nobody is deserving of something they didn't work for.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": -5,
                    "rev": -2,
                    "central": 4,
                    "production": 0,
                    "cultural": 1,
                    "state": -3,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Military is more important than citizen wellfare.",
            "description": "It's more important we're constantly armed very well than it is that all citizens are thriving.",
            "effect":
                {
                    "x": 4,
                    "national": 2,
                    "authoritarian": 1,
                    "progressive": 1,
                    "rev": 1,
                    "central": 1,
                    "production": -3,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Sources like CNN and FOX News are unreliable.",
            "description": "Those sources are both too biased and should not be used in arguments.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Colleges lean left, and are unreliable sources.",
            "description": "Studies performed by colleges are unreliable because most colleges tend to lean left. Studies done by colleges can not be used in an argument.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Utilities should be publically owned.",
            "description": "Roads, electricity, internet, and other basic utilities should all be owned by the people.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -6,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Everybody deserves equal oppurtunity in life.",
            "description": "Everybody should be presented with the same oppurtunities in life. This includes affordable healthcare, welfare programs, affordable colleges, ect.",
            "effect":
                {
                    "x": -1,
                    "national": 0,
                    "authoritarian": -5,
                    "progressive": -3,
                    "rev": 0,
                    "central": 1,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Racism is not a problem in my nation.",
            "description": "Racism doesn't exist, or barely affects society.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": -4,
                }
        },
        {
            "question": "Society was better many years ago than it is now.",
            "description": "Life in the 1970's or 1980's was far superior than life is now.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 11,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Climate change is a hoax.",
            "description": "The media is lying about climate change.",
            "effect":
                {
                    "x": 2,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 5,
                    "rev": 0,
                    "central": 0,
                    "production": -8,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "LGBTQ people don't deserve rights.",
            "description": "People who are LGBTQ don't deserve basic rights, like freedom of speech. Companies refusing to hire people because they are LGBTQ is acceptable and nothing should be done about that.",
            "effect":
                {
                    "x": 5,
                    "national": 4,
                    "authoritarian": 4,
                    "progressive": 4,
                    "rev": 8,
                    "central": -3,
                    "production": 0,
                    "cultural": -8,
                    "state": 0,
                    "religion": -5,
                    "race": -2,
                }
        },
        {
            "question": "The wage gap is real.",
            "description": "The wage gap does actually exist. Regardless of the size of it, effort should be put forth to close it.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": -5,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 2,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "My race is better than other races.",
            "description": "My race is better than other races. I should have special privelages over other races because of my skin color.",
            "effect":
                {
                    "x": 0,
                    "national": 3,
                    "authoritarian": 0,
                    "progressive": 13,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": -16,
                }
        },
        {
            "question": "Culture is more important than business.",
            "description": "My culture and heritage is far more important than the economy.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 6,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 14,
                    "state": 3,
                    "religion": -3,
                    "race": 3,
                }
        },
        {
            "question": "The Confederate Flag is a hate symbol.",
            "description": "It should not be flown, as it can be offensive. The Confederate Flag additionally is not a representation of heritage.",
            "effect":
                {
                    "x": -5,
                    "national": -3,
                    "authoritarian": 2,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 4,
                    "state": 0,
                    "religion": 0,
                    "race": 3,
                }
        },
        {
            "question": "A monarchy is an effective system of government.",
            "description": "A monarchy would be beneficial to our way of life, and work should be made to implement a monarchy in today's society.",
            "effect":
                {
                    "x": 5,
                    "national": 4,
                    "authoritarian": 10,
                    "progressive": 10,
                    "rev": 0,
                    "central": -6,
                    "production": 0,
                    "cultural": -3,
                    "state": -3,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I'd rather have a totalitarian government than no government.",
            "description": "Relating to a system of government that is centralized and dictatorial and requires complete subservience to the state.",
            "effect":
                {
                    "x": 10,
                    "national": 0,
                    "authoritarian": 15,
                    "progressive": 3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": -5,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Taxation is theft.",
            "description": "Taxation should not exist. Taxation is theft, and the government should not intervene with my money.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -16,
                    "progressive": -4,
                    "rev": -5,
                    "central": 6,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Minorities are not oppressed.",
            "description": "Latinos, blacks, Jews, Muslims, are not oppressed.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -3,
                    "state": 0,
                    "religion": -3,
                    "race": -3,
                }
        },
        {
            "question": "A travel ban on Muslims is acceptable.",
            "description": "A travel ban will prevent terrorism.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": 6,
                    "progressive": 9,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -7,
                    "state": 0,
                    "religion": -7,
                    "race": -7,
                }
        },
        {
            "question": "Everybody should own guns.",
            "description": "Every single citizen of my nation should be in possession of a firearm.",
            "effect":
                {
                    "x": 5,
                    "national": 0,
                    "authoritarian": -10,
                    "progressive": -3,
                    "rev": -3,
                    "central": 4,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "The drinking age should be lowered to 18.",
            "description": "All legal adults should be allowed to purchase alcoholic beverages.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -4,
                    "progressive": -3,
                    "rev": 0,
                    "central": 2,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Cannabis should be legalized.",
            "description": "There's no point in restricting the sale of cannabis. It should be decriminalized and legalized.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": -5,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": -1,
                    "cultural": 2,
                    "state": 0,
                    "religion": 0,
                    "race": 2,
                }
        },
        {
            "question": "Drug usage should not be considered a crime.",
            "description": "Dealing drugs, using drugs, and anything else related to drugs, which does not harm other people, shouldn't be a crime and should be entirely allowed.",
            "effect":
                {
                    "x": -5,
                    "national": 0,
                    "authoritarian": -9,
                    "progressive": -4,
                    "rev": -2,
                    "central": 2,
                    "production": 0,
                    "cultural": 2,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Globalization is bad for everybody.",
            "description": "Globalization is bad for everybody and should be reduced.",
            "effect":
                {
                    "x": 0,
                    "national": 6,
                    "authoritarian": 0,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 2,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "War is more important than diplomacy.",
            "description": "War has more value than effective diplomacy.",
            "effect":
                {
                    "x": 5,
                    "national": 12,
                    "authoritarian": 3,
                    "progressive": 10,
                    "rev": 0,
                    "central": -3,
                    "production": -3,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "War must be justified.",
            "description": "Any wars must be justified to all people across the globe.",
            "effect":
                {
                    "x": -5,
                    "national": -6,
                    "authoritarian": 0,
                    "progressive": -4,
                    "rev": 0,
                    "central": 0,
                    "production": -1,
                    "cultural": 1,
                    "state": 0,
                    "religion": 0,
                    "race": -1,
                }
        },
        {
            "question": "Nuclear missiles make war impossible now.",
            "description": "There is no chance of a large-scale war starting now. Nuclear weaponary has effectively put everybody in a form of headlock. Nobody dares to break out of it in fear that nuclear weaponary will cripple their nation. There is no chance of another World War.",
            "effect":
                {
                    "x": 0,
                    "national": -7,
                    "authoritarian": 0,
                    "progressive": -5,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -2,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I'm more right-winged than left-winged.",
            "description": "",
            "effect":
                {
                    "x": 10,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I agree with the following.",
            "description": "All Cops Are Bastards, not meaning all cops are awful people, but rather the police force is used oppresively and should be totally reformed or outright destroyed.",
            "effect":
                {
                    "x": -4,
                    "national": 0,
                    "authoritarian": -3,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "A stateless society is optimal.",
            "description": "A world without any states or nations is optimal.",
            "effect":
                {
                    "x": -2,
                    "national": 0,
                    "authoritarian": -6,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Nuclear energy is a bad idea.",
            "description": "Nuclear energy, a clean source of energy, is a bad idea and is harmful.",
            "effect":
                {
                    "x": -4,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I'm more of a libertarian than an authoritarian.",
            "description": "",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -10,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I support trickle down economics.",
            "description": "Trickle-down economics, also called trickle-down theory, refers to the economic proposition that taxes on businesses and the wealthy in society should be reduced as a means to stimulate business investment in the short term and benefit society at large in the long term.",
            "effect":
                {
                    "x": 4,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 4,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Liberty is a priority above anything else.",
            "description": "It's more important that I have my liberties than anything else.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -13,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Primitivism is a good idea.",
            "description": "Life should go back to being simple. Modern things, such as tap water, cars, trains, busses, complex politics, are all useless.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": -6,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "A Green New Deal is a good idea.",
            "description": "A proposed Green New Deal would severely cut emissions. However, with that, the price of energy would spike significantly.",
            "effect":
                {
                    "x": -7,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "The rich have earned their money.",
            "description": "People with tons of money have earned it themselves. They're deserving of the money they have.",
            "effect":
                {
                    "x": 6,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 6,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "High taxation for the rich is okay.",
            "description": "People with money in excess of $10,000,000 should have very high tax rates. Rates of upwards of ~50% are acceptable.",
            "effect":
                {
                    "x": -3,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Good relations are important.",
            "description": "It's more important that we maintain a good relationship will all of our neighboring nations than that we are successful.",
            "effect":
                {
                    "x": -5,
                    "national": -5,
                    "authoritarian": 0,
                    "progressive": -3,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 1,
                }
        },
        {
            "question": "I'm a religious person.",
            "description": "I personally believe religion is important. I also think that there is a higher power.",
            "effect":
                {
                    "x": 6,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": -11,
                    "race": 0,
                }
        },
        {
            "question": "Land should not be a commodity to be bought, nor sold.",
            "description": "All land in the world should be communal or free. Selling and buying land is pointless.",
            "effect":
                {
                    "x": -6,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": -9,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Finance is a useless field.",
            "description": "People who manipulate money shouldn't benefit from the economy as they contribute nothing to society in terms of materiel.",
            "effect":
                {
                    "x": -8,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": -6,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "A free market is inherently dangerous to people.",
            "description": "Free markets should not ever be put in to place as they're dangerous.",
            "effect":
                {
                    "x": -3,
                    "national": 0,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "International aid is a waste of money.",
            "description": "People who don't belong to my nation should not be helped by my nation. It's not my problem.",
            "effect":
                {
                    "x": 5,
                    "national": 5,
                    "authoritarian": 0,
                    "progressive": 5,
                    "rev": 0,
                    "central": 3,
                    "production": 1,
                    "cultural": 3,
                    "state": 0,
                    "religion": 0,
                    "race": -3,
                }
        },
        {
            "question": "International aid is beneficial to me.",
            "description": "I, and my country, both personally benefit from international aid.",
            "effect":
                {
                    "x": -8,
                    "national": -5,
                    "authoritarian": 0,
                    "progressive": 0,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "A higher minimum wage is required.",
            "description": "The current minimum wage is too low to live off of and must be raised.",
            "effect":
                {
                    "x": -3,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": -5,
                    "rev": 1,
                    "central": 1,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Countries such as Denmark have a fantastic healthcare system.",
            "description": "",
            "effect":
                {
                    "x": -3,
                    "national": -1,
                    "authoritarian": 0,
                    "progressive": -3,
                    "rev": 0,
                    "central": 2,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Uneducated people should not be allowed to vote.",
            "description": "People who can't demonstrate a clear understanding of politics and political philosphophy should not be allowed to vote.",
            "effect":
                {
                    "x": -2,
                    "national": 0,
                    "authoritarian": 4,
                    "progressive": -4,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": -6,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Companies can't be trusted to stop climate change.",
            "description": "Corporations and companies can not be trusted to stop climate change. The government must intervene with different forms of regulations to ensure that the Earth is kept safe.",
            "effect":
                {
                    "x": -3,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": -5,
                    "rev": 0,
                    "central": 0,
                    "production": 7,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "I consider myself to be an international citizen.",
            "description": "I don't belong to a country or a nation, but rather, the world.",
            "effect":
                {
                    "x": -3,
                    "national": -10,
                    "authoritarian": -2,
                    "progressive": -2,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 0,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
        {
            "question": "Quality education is a right of all people.",
            "description": "Absolutely everybody should be afforded an education.",
            "effect":
                {
                    "x": 0,
                    "national": 0,
                    "authoritarian": 1,
                    "progressive": -4,
                    "rev": 0,
                    "central": 0,
                    "production": 0,
                    "cultural": 2,
                    "state": 0,
                    "religion": 0,
                    "race": 0,
                }
        },
    ];
