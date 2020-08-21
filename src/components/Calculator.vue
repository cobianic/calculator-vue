<template>
  <div>
    <div class="output-screen p-2 d-flex align-items-center">
      {{ secondOperand || firstOperand || 0 }}
    </div>
    <div class="button-container">
      <b-row no-gutters>
        <b-col class="column">
          <b-button @click="clearEverything()" class="text-warning">C</b-button>
          <b-button @click="deleteCharacter()">
            <font-awesome-icon :icon="['fas', 'backspace']" />
          </b-button>
          <b-button @click="updateOperator('/')">
            <font-awesome-icon :icon="['fas', 'divide']" />
          </b-button>
          <b-button @click="updateOperator('*')">
            <font-awesome-icon :icon="['fas', 'times']" />
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="column">
          <b-button @click="appendCharacter(7)">7</b-button>
          <b-button @click="appendCharacter(8)">8</b-button>
          <b-button @click="appendCharacter(9)">9</b-button>
          <b-button @click="updateOperator('-')">
            <font-awesome-icon :icon="['fas', 'minus']" />
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="column">
          <b-button @click="appendCharacter(4)">4</b-button>
          <b-button @click="appendCharacter(5)">5</b-button>
          <b-button @click="appendCharacter(6)">6</b-button>
          <b-button @click="updateOperator('+')">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="column">
          <b-button @click="appendCharacter(1)">1</b-button>
          <b-button @click="appendCharacter(2)">2</b-button>
          <b-button @click="appendCharacter(3)">3</b-button>
          <b-button @click="squareRoot">
            <font-awesome-icon :icon="['fas', 'square-root-alt']" />
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col class="column">
          <b-button @click="percentage">
            <font-awesome-icon :icon="['fas', 'percentage']" />
          </b-button>
          <b-button @click="appendCharacter(0)">0</b-button>
          <b-button @click="appendCharacter('.')">.</b-button>
          <b-button @click="evaluate" class="equal-button">
            <font-awesome-icon :icon="['fas', 'equals']" />
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { evaluate } from 'mathjs'
import { sqrt } from 'mathjs/number'

export default {
  data() {
    return {
      firstOperand: '',
      secondOperand: '',
      operator: ''
    }
  },
  methods: {
    evaluate() {
      const { firstOperand, secondOperand, operator } = this
      this.firstOperand = evaluate(firstOperand + operator + secondOperand).toString()
      this.secondOperand = ''
      this.operator = ''
      },
    appendCharacter(char) {
      let currentOperand = this.operator ? 'secondOperand' : 'firstOperand'

      if (char === '.') {
        if (!this.firstOperand.includes('.')) {
          this[currentOperand] += char
        }
      } else {
        this[currentOperand] += char
      }
    },
    updateOperator(op) {
      if (this.operator) {
        this.evaluate()
      }
      this.operator = op
    },
    deleteCharacter() {
      this.firstOperand = this.firstOperand.substr(0, this.firstOperand.length - 1);
    },
    clearEverything() {
      this.firstOperand = ''
      this.secondOperand = ''
    },
    squareRoot() {
      let currentOperand = this.operator ? 'secondOperand' : 'firstOperand'
      this.secondOperand = sqrt(this[currentOperand])
    },
    percentage() {
      let currentOperand = this.operator ? 'secondOperand' : 'firstOperand'
      this.secondOperand = this[currentOperand] / 100
    }
  }
}
</script>

<style scoped>

.output-screen {
  height: 80px;
  width: 48vh;
  border: 1px solid #c0c0c1 !important;
  margin:0 auto;
  font-size: 120%;
}

.column > button {
  font-size: 120%;
  border-radius: 0;
  border-color: #c0c0c1 !important;
  width: 12vh;
  height: 12vh;
  background-color: #fcfcfc;
  color: #2c3e50;
  font-weight: 900;
}

.column > button:focus {
  box-shadow: 0 0 0 0;
}

.equal-button {
  background-color: orange !important;
  border: 0 !important;
}

</style>