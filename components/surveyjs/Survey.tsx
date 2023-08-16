"use client";

// REFERENCE: https://surveyjs.io/form-library/examples/make-quiz-javascript/reactjs

import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import "./Survey.css"

const surveyJson_ = {
    elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
    }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    }]
};

const surveyJson = {
    "title": "American History",
    "showProgressBar": "bottom",
    "showTimerPanel": "top",
    "maxTimeToFinishPage": 10,
    "maxTimeToFinish": 25,
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "elements": [
                {
                    "type": "html",
                    "html": "You are about to start a quiz on American history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
                },
                {
                    "type": "text",
                    "name": "username",
                    "titleLocation": "hidden",
                    "isRequired": true,
                    "maxLength": 25
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "civilwar",
                    "title": "When was the American Civil War?",
                    "choices": [
                        "1796-1803",
                        "1810-1814",
                        "1861-1865",
                        "1939-1945"
                    ],
                    "correctAnswer": "1861-1865"
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "libertyordeath",
                    "title": "Whose quote is this: \"Give me liberty, or give me death\"?",
                    "choicesOrder": "random",
                    "choices": [
                        "John Hancock",
                        "James Madison",
                        "Patrick Henry",
                        "Samuel Adams"
                    ],
                    "correctAnswer": "Patrick Henry"
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "magnacarta",
                    "title": "What is Magna Carta?",
                    "choicesOrder": "random",
                    "choices": [
                        "The foundation of the British parliamentary system",
                        "The Great Seal of the monarchs of England",
                        "The French Declaration of the Rights of Man",
                        "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    "correctAnswer": "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
        {
            "expression": "{correctAnswers} == 0",
            "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
        },
        {
            "expression": "{correctAnswers} == {questionCount}",
            "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }
    ]
};

export default function SurveyComponent() {

    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender: any) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);

    // INSTANT RESULTS >>
    const correctStr = "Correct";
    const incorrectStr = "Incorrect";
    
    // Builds an HTML string to display in a question title
    function getTextHtml (text, str, isCorrect) {
        if (text.indexOf(str) < 0)
            return undefined;
    
        return text.substring(0, text.indexOf(str)) +
            "<span class='" +  (isCorrect ? "correctAnswer" : "incorrectAnswer" ) + "'>" +
                str +
            "</span>";
    }
    
    // Compares the correct answer with a given answer and returns `true` if they are equal
    function isAnswerCorrect (q) {
        const correctAnswer = q.correctAnswer;
    
        if (!correctAnswer || q.isEmpty())
            return undefined;
    
        let givenAnswer = q.value;
        if (!Array.isArray(correctAnswer))
            return correctAnswer == givenAnswer;
    
        if (!Array.isArray(givenAnswer))
            givenAnswer = [givenAnswer];
    
        for (let i = 0; i < givenAnswer.length; i++) {
            if (correctAnswer.indexOf(givenAnswer[i]) < 0)
                return false;
        }
        return true;
    }
    
    // Adds "Correct" or "Incorrect" to a question title
    function changeTitle (q) {
        if (!q) return;
    
        const isCorrect = isAnswerCorrect(q);
        if (!q.prevTitle) {
            q.prevTitle = q.title;
        }
        if (isCorrect === undefined) {
            q.title = q.prevTitle;
        }
        q.title =  q.prevTitle + ' ' + (isCorrect ? correctStr : incorrectStr);
    }
    
    survey.onValueChanged.add((_, options) => {
        // Change the quesion title when the question value is changed
        changeTitle(options.question);
    });
    
    survey.onTextMarkdown.add((_, options) => {
        const text = options.text;
        let html = getTextHtml(text, correctStr, true);
        if (!html) {
            html = getTextHtml(text, incorrectStr, false);
        }
        if (!!html) {
            // Set an HTML string with the "Correct" or "Incorrect" suffix for display
            options.html = html;
        }
    });
    // >> INSTANT RESULTS

    survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}