/**
 * Used to download a JSON file so the user can save any quizzes which they
 * may have made. Can also be used to upload a JSON file so the user can
 * take that quiz instead of the default one.
 */

// The file format for saved quizzes is as follows. Note that some of these
// quizzes, depending on how popular they are, may be included in the official
// GitHub repository, thus making them accessible to the general public.
// Or, in other words, anybody who doesn't download the quiz and manually
// upload it. But oh well.
// { (biggest JSON, contains everything)
// - 'options': {
// -- 'axes': {}
// -- 'buttons': {}
// - } (closure of 'options')
// - 'questions': {questions array}
// } (closure of biggest JSON)
