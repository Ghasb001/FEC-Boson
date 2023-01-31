import React from 'react';

export var SearchQuestions = (props) => {

  var handleChange = (e) => {
    props.setTerm(e.target.value)
    var filtered = [];
    if (props.term.length >= 3) {
      for (var i = 0; i < props.questions.length; i++) {
        var question = props.questions[i];
        if (question.question_body.includes(props.term)) {
          filtered.push(question);
        }
        for (var key in question.answers) {
          if (question.answers[key].body.includes(props.term)) {
            filtered.push(question);
          }
        }
      }
      //set filtered questions state to filtered array
      props.setFiltered(filtered);
    }
  }

  var handleChange = (e) => {
    props.setTerm(e.target.value)
    //create empty result array
    var filtered = [];
    if (props.term.length > 2) {
      //if search term is at least 3 chars long...
      //iterate over the questions array
        //if the question body contains the term
          //question.question_body.includes(props.term)
          //push the current question to the array
        //otherwise iterate over the answers object
          //if the answer body contains the term
            //answer.answerId.body
          //push the current question to the array
    }
  }
  props.setQuestions(filtered);
}

export var SearchQuestions = (props) => {

  return (
    <div>
      <form>
        <input onChange={handleChange}
          type="text"
          name="search"
          placeholder="Have a question? Search for answers…"
          value={props.term}
        />
      </form>
    </div>
  )
}



//# A search bar will appear above the questions list.
//Search terms entered in this text input will filter the list for matching results.

//After the user types 3 or more characters into the search bar the results will
  //begin to filter to only those containing matching text.
//The filter should continue to update as the user adds or removes characters.
//# The bar should display placeholder text reading “Have a question? Search for answers…”
//If the user clears the search term, or removes characters so that less than 3 remain,
//the list should return to the state where it is not filtered to matching text.
//The search filter should work with any other filters or sorts that have been applied,
//and narrow the results further.
//Changes to the sort and rating filters should not remove the search term filter.
