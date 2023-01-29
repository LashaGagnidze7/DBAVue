<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>  

<script>
/*const unwatch = this.$watch('foo', callback)

// ...when the watcher is no longer needed:
unwatch()*/
export default {
  data() {
    return {
      key: '',
      question: '',
      question1: '',
      answer: 'Questions usually contain a question mark. ;-)'
    };
  },
  created() {
    this.$watch('question', (/*newQuestion*/) => {
      //..
    })
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, /*oldQuestion*/) {
      if (newQuestion.includes('?')) {
        this.getAnswer();
      }
    },
    someObject: {
      handler(/*newValue, oldValue*/) {
        // Note: `newValue` will be equal to `oldValue` here
        // on nested mutations as long as the object itself
        // hasn't been replaced.
      },
      deep: true,
    },
    question1: {
      handler(/*newQuestion*/) {
        // this will be run immediately on component creation
      },
      // force eager callback execution
      immediate: true,
    },
    key: {
      handler() { },
      flush: 'post',
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach teh API. ' + error
      }
    }
  }
};
</script>

<style>

</style>
