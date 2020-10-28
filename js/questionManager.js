let gens = {
    /**
     * Creates a new axis.
     *
     * @param key the internal name of the axis
     * @param titlePositive the title when the axis is positive
     * @param titleNegative the title when the axis is negative
     * @param colorPositive the color when the axis is positive
     * @param colorNegative the color when the axis is negative
     * @returns {{titles: {negative: *, positive: *}, key: *, colors: {negative: *, positive: *}}}
     */
    createAxis: function (key,
                          titlePositive,
                          titleNegative,
                          colorPositive,
                          colorNegative) {
        return {
            'key': key,
            'titles': {
                'negative': titleNegative,
                'positive': titlePositive
            },
            'colors': {
                'negative': colorNegative,
                'positive': colorPositive
            }
        }
    },
    /**
     * Creates a new button.
     *
     * @param modifier the multiplier the button has.
     * @param color the physical color of the button.
     * @param text the text the button has on it.
     * @param order the order in which the button appears. lower = sooner.
     * @returns {{color: *, modifier: *, text: *, order: *}}
     */
    createButton: function (modifier,
                            color,
                            text,
                            order) {
        return {
            'modifier': modifier,
            'color': color,
            'text': text,
            'order': order
        }
    },
    /**
     * Creates a new question.
     *
     * @param question the question being asked.
     * @param description the description of the question.
     * @param effect the effects the question has on different values.
     * @returns {{question: *, effect: *, description: *}}
     */
    createQuestion: function (question,
                              description,
                              effect) {
        return {
            'question': question,
            'description': description,
            'effect': effect
        }
    }
}
