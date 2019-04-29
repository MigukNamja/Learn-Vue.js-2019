<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{ curQuestion.question }}
      </template>

      <hr class="my-4">

      <b-list-group class="list-group">
        <b-list-group-item
          v-for="(answer,index) in answers" :key="index"
          @click="clickAnswer(index,answer)"
          :class="[selectedIndex === index ? 'selected' : '']"
          >
          {{index}} : {{answer}}
        </b-list-group-item>
      </b-list-group>

      <b-button variant="primary" href="#">Submit</b-button>
      <b-button  @click="next" variant="success" href="#">
        Next
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    curQuestion: Object,
    next: Function
  },
  data() {
    return {
      selectedIndex: null
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
    currentQuestion() {
      this.selectedIndex = null
      this.shuffleAnswers()
    }
  },
  methods: {
    clickAnswer(index,answer) {
      console.log(answer)
      this.selectedIndex = index
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
    }
  },
  mounted() {
    console.log(this.curQuestion)
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