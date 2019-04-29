<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{ curQuestion.question }}
      </template>

      <hr class="my-4">

      <b-list-group class="list-group">
        <b-list-group-item
          v-for="(answer,index) in shuffledAnswers" :key="index"
          @click="clickAnswer(index,answer)"
          :class="[selectedIndex === index ? 'selected' : '']"
          >
          {{index}} : {{answer}}
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || alreadyAnswered"
      >
        Submit
      </b-button>
      <b-button  @click="next" variant="success">
        Next
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    curQuestion: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      alreadyAnswered: false
    }
  },
  computed: {
    answers() {
      let answers = [...this.curQuestion.incorrect_answers]
      answers.push(this.curQuestion.correct_answer)
      return answers
    }
  },
  watch: {
    curQuestion: {
        immediate: true,
        handler() {
          this.selectedIndex = null
          this.shuffleAnswers()
          this.alreadyAnswered = false
        }
    }
    
    // {
    //   this.selectedIndex = null
    //   this.shuffleAnswers()
    // }
  },
  methods: {
    clickAnswer(index,answer) {
      console.log(answer)
      this.selectedIndex = index
    },
    shuffleAnswers() {
      let answers = [...this.curQuestion.incorrect_answers, this.curQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = _.indexOf(this.shuffledAnswers,this.curQuestion.correct_answer,0)
    },
    submitAnswer() {
      let isCorrect = false
      
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }

      this.increment(isCorrect)
      this.alreadyAnswered = true
    }
  },
  mounted() {
    console.log(this.curQuestion)
    // this.shufflerAnswers()
  }
}
</script>

<style scoped>
.list-group {
  margin-bottom: 2px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 2px 2px 2px 2px
}

.selected {
  background: #a7a7cf;
}

.correct {
  background: #83b883;
}

.incorrect {
  background: #d48e8e;
}

</style>